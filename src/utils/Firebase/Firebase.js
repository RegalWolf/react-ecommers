import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBwGokF3_R1Egvr60jAmzf-ehreVPu4-IU",
    authDomain: "react-ecommers-47.firebaseapp.com",
    databaseURL: "https://react-ecommers-47.firebaseio.com",
    projectId: "react-ecommers-47",
    storageBucket: "",
    messagingSenderId: "880767297402",
    appId: "1:880767297402:web:2cef936fad89076bacd8c3",
    measurementId: "G-HWZ2RTKQ3Y"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
