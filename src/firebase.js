// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from  "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbo5Y7L0dZ-CM_dwBv3BQ-iHE3P927a_w",
  authDomain: "expense-f6d16.firebaseapp.com",
  projectId: "expense-f6d16",
  storageBucket: "expense-f6d16.appspot.com",
  messagingSenderId: "505290329510",
  appId: "1:505290329510:web:25645308d439140bc39367",
  measurementId: "G-YHKW9ZJCKP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const projectfirestore = getFirestore(app)
const auth = getAuth(app)

export { projectfirestore,auth}
