import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const provider = new firebase.auth.GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyBKJJK6qlTry9PAq8WBFcsNW6b-FKL9XVw",
  authDomain: "discord-lite-f8dbf.firebaseapp.com",
  projectId: "discord-lite-f8dbf",
  storageBucket: "discord-lite-f8dbf.appspot.com",
  messagingSenderId: "447424983683",
  appId: "1:447424983683:web:8829bff48d864e1a4fe1b6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, provider, storage };
