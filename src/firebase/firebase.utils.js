import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA4I7eN6zroJ7tTj0AhpDwqGci6UyPJhX8",
    authDomain: "clothing-shop-c496f.firebaseapp.com",
    databaseURL: "https://clothing-shop-c496f.firebaseio.com",
    projectId: "clothing-shop-c496f",
    storageBucket: "clothing-shop-c496f.appspot.com",
    messagingSenderId: "382585063517",
    appId: "1:382585063517:web:0179e87cff986d402125b4",
    measurementId: "G-CRDTVE8BT4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

/* Gives access to Google Auth Library */
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
