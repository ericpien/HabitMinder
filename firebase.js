//Version 9
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getAuth } from "firebase/auth";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional 
// need to enable authentication on firebase
const firebaseConfig = {
  apiKey: "AIzaSyDjPFTaGJ_9Eg6dWAyp1lzEPlPvHfC_zM0",
  authDomain: "test-c969e.firebaseapp.com",
  projectId: "test-c969e",
  storageBucket: "test-c969e.appspot.com",
  messagingSenderId: "967463384133",
  appId: "1:967463384133:web:f08869f9b95cb05f705f2c",
  measurementId: "G-56S9N84BQC"
};

// Initialize Firebase
// step - 3
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {auth};
// const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
// need to enable databse on firebase w/ "allow read, write: if true"
const db = getFirestore(app);
export { db, auth };
