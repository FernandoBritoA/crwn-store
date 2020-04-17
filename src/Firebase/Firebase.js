import firebase from 'firebase/app';
import 'firebase/firestore'; //database
import 'firebase/auth'; //authentication

const config = { //copied from firebase-app settings
    apiKey: "AIzaSyAoRO_tZIq49UJqYvPO4PSkLdfGUOR3rXU",
    authDomain: "store-db-56444.firebaseapp.com",
    databaseURL: "https://store-db-56444.firebaseio.com",
    projectId: "store-db-56444",
    storageBucket: "store-db-56444.appspot.com",
    messagingSenderId: "1079008002250",
    appId: "1:1079008002250:web:126c1f83fcff50c0bdb433",
    measurementId: "G-SCJFX0BG9L"
}

firebase.initializeApp(config);

export const auth = firebase.auth(); //authentication
export const firestore = firebase.firestore(); //database

//GOOGLE AUTHENTICATION
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' }); //trigger google pop up
export const signInWithGoogle = () => auth.signInWithPopup(provider);// idem

export default firebase;