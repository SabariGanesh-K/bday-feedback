
import firebase from 'firebase/compat/app';

// import  { GoogleAuthProvider,signInWithPopup, signInWithEmailAndPassword,createUserWithEmailAndPassword,sendPasswordResetEmail } from 'firebase/compat/auth';
// import { query,getDocs,collection,where ,addDoc} from 'firebase/compat/firestore'
import 'firebase/compat/firestore'

import 'firebase/compat/storage'
import 'firebase/compat/auth'
import {where ,query,collection,addDoc,getDocs} from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBKeWqOnyM2DZqk-IFdVTB9KDIJsmU-5uk",
    authDomain: "sabaribirthday-b4eb3.firebaseapp.com",
    projectId: "sabaribirthday-b4eb3",
    storageBucket: "sabaribirthday-b4eb3.appspot.com",
    messagingSenderId: "145193754073",
    appId: "1:145193754073:web:154edb3f9a6656b8574dc8",
    measurementId: "G-QB87M9B5P5"
  };


// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);
// Use these for db & auth
const db = firebaseApp.firestore();

const auth = firebase.auth();
const storage = firebase.storage();
export {db,auth,storage} ;