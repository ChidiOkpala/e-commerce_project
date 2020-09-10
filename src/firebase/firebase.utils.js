import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyArA12S5n0Bub95yGCdZcstLyZz0suUDGo",
    authDomain: "co-e-commerce.firebaseapp.com",
    databaseURL: "https://co-e-commerce.firebaseio.com",
    projectId: "co-e-commerce",
    storageBucket: "co-e-commerce.appspot.com",
    messagingSenderId: "419558754331",
    appId: "1:419558754331:web:2346e03df430d9b33150be",
    measurementId: "G-3HCHLCQGWR"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error){
            console.log('error creating user', error.message);
        }
    };
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
