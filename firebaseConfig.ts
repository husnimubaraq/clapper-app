import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyBU-1wypkzpsuZI176No0LIeiHgntAZ5SA',
  authDomain: 'clapper-app.firebaseapp.com',
  databaseURL: 'https://clapper-app.firebaseio.com',
  projectId: 'clapper-app',
  storageBucket: 'clapper-app.appspot.com',
  messagingSenderId: '962279455498',
  appId: '1:962279455498:android:dba9a49e0bb292c18618f3'
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
