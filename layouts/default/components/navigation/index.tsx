import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useRef, useState } from 'react'

import { BottomTabParamList, RootStackParamList, StackNavigation } from 'types';
import LoginWrapper from 'features/auth/components/login-wrapper'
import RegisterWrapper from 'features/auth/components/register-wrapper'
import ResetPasswordWrapper from 'features/auth/components/reset-password-wrapper'

import HomeWrapper from 'features/home/components/home-wrapper'
import ProfileWrapper from 'features/profile/components/profile-wrapper'
import ClapperWrapper from 'features/clapper/components/clapper-wrapper'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'components/base';
import { colors, spacing } from 'themes';
import { FingerprintIcon, HomeIcon, UserIcon } from 'components/icons';
import { Platform, TouchableOpacity } from 'react-native';
import * as Notifications from 'expo-notifications';

const RootStack = createNativeStackNavigator<RootStackParamList>();
const TabStack = createBottomTabNavigator<BottomTabParamList>();

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
    }),
});


async function registerForPushNotificationsAsync() {
    let token;

    if (Platform.OS === 'android') {
        await Notifications.setNotificationChannelAsync('new-emails', {
            name: 'new-emails',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
            enableVibrate: true,
            sound: 'suara1.wav'
        });
    }

    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
    }
    if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
    }
    // Learn more about projectId:
    // https://docs.expo.dev/push-notifications/push-notifications-setup/#configure-projectid
    token = (await Notifications.getDevicePushTokenAsync()).data;
    console.log(token);

    return token;
}


const BottomTabNavigator = () => {
    const { Navigator, Screen } = TabStack

    const { navigate } = useNavigation<StackNavigation>()

    const notificationListener = useRef<any>();
    const responseListener = useRef<any>();

    const [expoPushToken, setExpoPushToken] = useState<any>('');
    const [notification, setNotification] = useState<any>(null);

    const init = async () => {
        const token = (await Notifications.getDevicePushTokenAsync()).data;

        console.log('token: ', token)
    }

    useEffect(() => {
        registerForPushNotificationsAsync().then((token) => setExpoPushToken(token));

        notificationListener.current = Notifications.addNotificationReceivedListener((notification) => {
            setNotification(notification);
        });

        responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
            console.log(response);
        });

        return () => {
            Notifications.removeNotificationSubscription(notificationListener.current);
            Notifications.removeNotificationSubscription(responseListener.current);
        };
    }, []);

    console.log('expoPushToken: ', expoPushToken)
    console.log('notification: ', notification)

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

    return (
        <NavigationContainer>
            <Navigator
                initialRouteName={'BottomTab'}
            >
                <Screen name='BottomTab' options={{ headerShown: false }} component={BottomTabNavigator} />
                <Screen name='Login' options={{ headerShown: false }} component={LoginWrapper} />
                <Screen name='Register' options={{ headerShown: false }} component={RegisterWrapper} />
                <Screen name='ResetPassword' options={{ headerShown: false }} component={ResetPasswordWrapper} />
                <Screen name='Clapper' options={{ headerShown: false }} component={ClapperWrapper} />
            </Navigator>
        </NavigationContainer>
    );
}

