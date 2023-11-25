import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useRef, useState } from 'react'
import messaging, { FirebaseMessagingTypes } from '@react-native-firebase/messaging';

import { BottomTabParamList, RootStackParamList, StackNavigation } from 'types';
import LoginWrapper from 'features/auth/components/login-wrapper'
import RegisterWrapper from 'features/auth/components/register-wrapper'
import ResetPasswordWrapper from 'features/auth/components/reset-password-wrapper'

import HomeWrapper from 'features/home/components/home-wrapper'
import ProfileWrapper from 'features/profile/components/profile-wrapper'
import ClapperWrapper from 'features/clapper/components/clapper-wrapper'
import ComplaintWrapper from 'features/complaint/components/complaint-wrapper'
import ComplaintDetailWrapper from 'features/complaint/components/complaint-detail-wrapper'
import NewsDetailWrapper from 'features/home/components/news-detail-wrapper'
import UpdateComplaintWrapper from 'features/complaint/components/update-complaint-wrapper'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'components/base';
import { colors, spacing } from 'themes';
import { FingerprintIcon, HomeIcon, UserIcon } from 'components/icons';
import { Platform, TouchableOpacity } from 'react-native';
import * as Notifications from 'expo-notifications';
import { useAuthStore } from 'stores';
import { TNotification } from 'types';

const RootStack = createNativeStackNavigator<RootStackParamList>();
const TabStack = createBottomTabNavigator<BottomTabParamList>();

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
    }),
});


const BottomTabNavigator = () => {
    const { Navigator, Screen } = TabStack

    const { navigate } = useNavigation<StackNavigation>()

    const setFcmToken = useAuthStore((state: any) => state.setFcmToken)

    const schedulePushNotification = async (notification: FirebaseMessagingTypes.Notification & {
        data: any
    }) => {
        
        await Notifications.scheduleNotificationAsync({
          content: {
            title: notification.title,
            body: notification.body,
            sound: notification.android?.sound,
            vibrate: [0, 250, 500, 1000],
            sticky: true,
            priority: Notifications.AndroidNotificationPriority.MAX,
            subtitle: notification.data.pengguna_nama,
          },
          trigger: { 
            seconds: 5,
            channelId: notification.android?.channelId,
          },
        });
    }

    const requestUserPermission = async () => {
        const authStatus = await messaging().requestPermission();
        const enabled =
            authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
            authStatus === messaging.AuthorizationStatus.PROVISIONAL;

        if (enabled) {
            
            const token = await messaging().getToken()

            console.log('token: ', token)

            setFcmToken(token)
        }

    }

    useEffect(() => {
        requestUserPermission()

        // Check whether an initial notification is available
        messaging().getInitialNotification().then(remoteMessage => {
            if (remoteMessage) {
                console.log('getInitialNotification: ', remoteMessage)
            }
        });

        messaging().onNotificationOpenedApp(remoteMessage => {
            console.log('onNotificationOpenedApp: ', remoteMessage)
        });

        messaging().setBackgroundMessageHandler(async remoteMessage => {
            console.log('setBackgroundMessageHandler: ', remoteMessage)
        });

        const unsubscribe = messaging().onMessage(async remoteMessage => {
            console.log('onMessage: ', remoteMessage)
            if(remoteMessage.notification){
                schedulePushNotification({
                    ...remoteMessage.notification,
                    data: remoteMessage.data
                })
            }
        });

        messaging().subscribeToTopic('kebakaran')
        messaging().subscribeToTopic('gempa-bumi')

        return () => {
            unsubscribe()
            messaging().unsubscribeFromTopic('kebakaran')
            messaging().unsubscribeFromTopic('gempa-bumi')
        }

    }, [])


    // useEffect(() => {
    //     init()

    // }, [])

    return (
        <Navigator
            initialRouteName='Home'
            screenOptions={{
                tabBarActiveTintColor: colors.palette.primary,
                tabBarInactiveTintColor: colors.palette.neutral400,
                tabBarStyle: {
                    paddingBottom: spacing.extraSmall,
                    height: 60
                },
                tabBarLabelStyle: {
                    fontFamily: 'Montserrat-Light',
                    fontSize: 12
                },
                tabBarLabel: ({ children, color }) => (
                    <Text variant='normal' color={color}>{children}</Text>
                ),
            }}
        >
            <Screen
                name='Home'
                options={{
                    headerShown: false,
                    title: 'Home',
                    tabBarIcon: ({ color }) => (
                        <HomeIcon color={color} />
                    ),
                }}
                component={HomeWrapper}
            />
            <Screen
                name='Center'
                options={{
                    headerShown: false,
                    title: 'Data Saya',
                    tabBarIcon: () => (
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => navigate('Clapper')}
                            className='h-[65px] w-[65px] items-center justify-center rounded-full bg-[#1B4C60] shadow-md border-2 border-white'
                        >
                            <FingerprintIcon width={40} height={40} color={colors.background} />
                        </TouchableOpacity>
                    ),
                    tabBarIconStyle: {
                        position: 'absolute',
                        top: -15,
                    }
                }}
                component={() => null}
            />
            <Screen
                name='Profile'
                options={{
                    headerShown: false,
                    title: 'Akun Saya',
                    tabBarIcon: ({ color }) => (
                        <UserIcon color={color} />
                    )
                }}
                component={ProfileWrapper}
            />
        </Navigator>
    )
}

export const Navigation = () => {
    const { Navigator, Screen } = RootStack
    
    const auth = useAuthStore((state: any) => state.auth)
    const isAuth = Object.keys(auth).length > 0

    return (
        <NavigationContainer>
            <Navigator
                initialRouteName={isAuth ? 'BottomTab' : 'Login'}
            >
                {isAuth ? (
                    <>
                        <Screen name='BottomTab' options={{ headerShown: false }} component={BottomTabNavigator} />
                        <Screen name='Clapper' options={{ headerShown: false }} component={ClapperWrapper} />
                        <Screen name='Complaint' options={{ headerShown: false }} component={ComplaintWrapper} />
                        <Screen name='ComplaintDetail' options={{ headerShown: false }} component={ComplaintDetailWrapper} />
                        <Screen name='NewsDetail' options={{ headerShown: false }} component={NewsDetailWrapper} />
                        <Screen name='UpdateComplaint' options={{ headerShown: false }} component={UpdateComplaintWrapper} />
                    </>
                ) : (
                    <>
                        <Screen name='Login' options={{ headerShown: false }} component={LoginWrapper} />
                        <Screen name='Register' options={{ headerShown: false }} component={RegisterWrapper} />
                        <Screen name='ResetPassword' options={{ headerShown: false }} component={ResetPasswordWrapper} />
                    </>
                )}
                
                
            </Navigator>
        </NavigationContainer>
    );
}

