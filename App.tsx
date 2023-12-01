import React, { useCallback } from "react";
import { AppWrapper } from "layouts/default";
import { LogBox, View } from "react-native";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
// import 'firebaseConfig'
import firebase from '@react-native-firebase/app';
import messaging from '@react-native-firebase/messaging';


SplashScreen.preventAutoHideAsync();

LogBox.ignoreAllLogs()

const firebaseConfig = {
  apiKey: 'AIzaSyBU-1wypkzpsuZI176No0LIeiHgntAZ5SA',
  authDomain: 'clapper-app.firebaseapp.com',
  databaseURL: 'https://clapper-app.firebaseio.com',
  projectId: 'clapper-app',
  storageBucket: 'clapper-app.appspot.com',
  messagingSenderId: '962279455498',
  appId: '1:962279455498:android:dba9a49e0bb292c18618f3'
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background! root', remoteMessage);
});
  

  
function IgniteApp() {

  const [fontsLoaded, fontError] = useFonts({
    'Montserrat-Black': require('./assets/fonts/Montserrat-Black.ttf'),
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-ExtraBold': require('./assets/fonts/Montserrat-ExtraBold.ttf'),
    'Montserrat-ExtraLight': require('./assets/fonts/Montserrat-ExtraLight.ttf'),
    'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'),
    'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  console.log('fontError: ', fontsLoaded)

  return (
    <View className="flex-1" onLayout={onLayoutRootView}>
      <AppWrapper />
    </View>
  );
}

export default IgniteApp;
