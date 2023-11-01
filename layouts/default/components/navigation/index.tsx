import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'

import { RootStackParamList } from 'types';
import LoginWrapper from 'features/auth/components/login-wrapper'
import HomeWrapper from 'features/home/components/home-wrapper'
import { useAuthStore } from 'stores';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
    const { Navigator, Screen } = RootStack

    const auth = useAuthStore((state: any) => state.auth)
    const isAuth = Object.keys(auth).length > 0 ? true : false
    
    return (
        <NavigationContainer>
            <Navigator
                initialRouteName={isAuth ? 'Home' : 'Login'}
            >
                {isAuth ? (
                    <>
                        <Screen name='Home' options={{headerShown: false}} component={HomeWrapper} />
                    </>
                ) : (
                    <>
                        <Screen name='Login' options={{headerShown: false}}  component={LoginWrapper} />
                    </>
                )}
            </Navigator>
        </NavigationContainer>
    );
}

