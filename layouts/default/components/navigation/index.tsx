import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'

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
import { TouchableOpacity } from 'react-native';

const RootStack = createNativeStackNavigator<RootStackParamList>();
const TabStack = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
    const { Navigator, Screen } = TabStack

    const { navigate } = useNavigation<StackNavigation>()

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
                tabBarLabel: ({children, color}) => (
                    <Text variant='normal' color={color}>{children}</Text>
                ),
            }}
        >
            <Screen 
                name='Home' 
                options={{
                    headerShown: false, 
                    title: 'Home',
                    tabBarIcon: ({color}) => (
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
                    tabBarIcon: ({color}) => (
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
                <Screen name='BottomTab' options={{headerShown: false}} component={BottomTabNavigator} />
                <Screen name='Login' options={{headerShown: false}}  component={LoginWrapper} />
                <Screen name='Register' options={{headerShown: false}}  component={RegisterWrapper} />
                <Screen name='ResetPassword' options={{headerShown: false}}  component={ResetPasswordWrapper} />
                <Screen name='Clapper' options={{headerShown: false}}  component={ClapperWrapper} />
            </Navigator>
        </NavigationContainer>
    );
}

