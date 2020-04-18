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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;//userAuth doesnt exist (user registered){

    const userRef = firestore.doc(`users/${userAuth.uid}`); //get back user reference at that location
    const snapShot = await userRef.get(); //wheter or not thre is data there, if userauth is stored

    //exists property: exists or not
    if (!snapShot.exists) {//if it doesnt exist ; no data in that place, we create it
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({ //create
                displayName, email, createdAt, ...additionalData
            }
            )
        } catch (error) {
            console.log('error creating user', error.mesage)
        }
    }
    return userRef; //in case we need it
}

firebase.initializeApp(config);

export const auth = firebase.auth(); //authentication
export const firestore = firebase.firestore(); //database

//GOOGLE AUTHENTICATION
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' }); //trigger google pop up
export const signInWithGoogle = () => auth.signInWithPopup(provider);// idem

export default firebase;