import { CommonActions, createNavigationContainerRef } from '@react-navigation/native';
import { RootStackParamList } from 'types';
import { NativeStackScreenProps } from '@react-navigation/native-stack'

export const navigationRef = createNavigationContainerRef()

export const navigate = (
    name: keyof RootStackParamList,
    params?: NativeStackScreenProps<RootStackParamList>['route']['params']
) => {
    if (navigationRef.isReady()) {
        navigationRef.navigate(name, params)
    }
}

export const navigateReset = (
    name: keyof RootStackParamList,
) => {
    if (navigationRef.isReady()) {
        navigationRef.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [
                { name },
              ],
            })
        );
    }
}