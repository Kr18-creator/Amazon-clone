import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyASkN5t1wEhrgBe_frqu5XXgNzSPXvLY2M",
  authDomain: "clone-kr040902.firebaseapp.com",
  projectId: "clone-kr040902",
  storageBucket: "clone-kr040902.appspot.com",
  messagingSenderId: "630314884038",
  appId: "1:630314884038:web:0ea2c64f4d123ef16bb0c7",
  measurementId: "G-Z4BL3HJR3J",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
