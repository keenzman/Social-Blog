import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyA8dVNXRluPNOLgqlDg0AUeGMZsPN8Z68I",
    authDomain: "next-blog-cf051.firebaseapp.com",
    projectId: "next-blog-cf051",
    storageBucket: "next-blog-cf051.appspot.com",
    messagingSenderId: "939306525298",
    appId: "1:939306525298:web:72fd30b4d3cf873fef58eb",
    measurementId: "G-DPE09RD1F0"
}

// Will only exec this if the app length is 0, so that it is not triggered twice
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();