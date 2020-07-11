import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
    apiKey: "AIzaSyAtpH9jEdCPSCyX3iuFUXGbwdvWewh3SrM",
    authDomain: "crown-clothing-dd1df.firebaseapp.com",
    databaseURL: "https://crown-clothing-dd1df.firebaseio.com",
    projectId: "crown-clothing-dd1df",
    storageBucket: "crown-clothing-dd1df.appspot.com",
    messagingSenderId: "371760367504",
    appId: "1:371760367504:web:b71d6ef31ccd6c033a1515",
    measurementId: "G-CZVRTJVV89"
  };

  // Initialize Firebase
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account"});

  export const signInwithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;