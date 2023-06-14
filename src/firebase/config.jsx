import firebase from "firebase/app";
import "firebase/auth" 

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBFk-_Q-icJjdZaBpPiOtKkTL0YgXzemx4",
    authDomain: "netflixsignin-7abda.firebaseapp.com",
    projectId: "netflixsignin-7abda",
    storageBucket: "netflixsignin-7abda.appspot.com",
    messagingSenderId: "906745965117",
    appId: "1:906745965117:web:c8de57568b0ae4b32f5854",
    measurementId: "G-80227F8BJC"
});

export const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebaseConfig;