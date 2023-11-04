import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'

import { RootStackParamList } from 'types';
import LoginWrapper from 'features/auth/components/login-wrapper'
import RegisterWrapper from 'features/auth/components/register-wrapper'
import HomeWrapper from 'features/home/components/home-wrapper'

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
    const { Navigator, Screen } = RootStack
    
    return (
        <NavigationContainer>
            <Navigator
                initialRouteName={'Login'}
            >
                <Screen name='Login' options={{headerShown: false}}  component={LoginWrapper} />
                <Screen name='Register' options={{headerShown: false}}  component={RegisterWrapper} />
                <Screen name='Home' options={{headerShown: false}} component={HomeWrapper} />
            </Navigator>
        </NavigationContainer>
    );
}

