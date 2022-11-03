import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyD_O1OEvm5iLNcIiXmacZz0_W9H3p-u8ug",
    authDomain: "mchat-639bc.firebaseapp.com",
    projectId: "mchat-639bc",
    storageBucket: "mchat-639bc.appspot.com",
    messagingSenderId: "763058233617",
    appId: "1:763058233617:web:d763714a7209662f526cb0",
  })
  .auth();
