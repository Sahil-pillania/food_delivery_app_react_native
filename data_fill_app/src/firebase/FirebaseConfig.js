import { initializeApp } from "firebase/app";
// import firebase from "firebase/app";
// import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getFirestore } from "firebase/firestore";
// import { getFirestore } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCY_daluzbufqCxXsYoKUNYeQyj5FIcdTQ",
  authDomain: "foodapp-8bf41.firebaseapp.com",
  projectId: "foodapp-8bf41",
  storageBucket: "foodapp-8bf41.appspot.com",
  messagingSenderId: "965327863547",
  appId: "1:965327863547:web:a7b88d30a0f718f895ba5e",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const db = firebase.firestore(app);
const storage = getStorage(app);

export { db, storage };
