import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpkoLvPkxZx8ckGTVEsRUpixsqIIdtr7E",
  authDomain: "expendol.firebaseapp.com",
  projectId: "expendol",
  storageBucket: "expendol.appspot.com",
  messagingSenderId: "500741833515",
  appId: "1:500741833515:web:4768e6c51f7954a136bb6e",
  measurementId: "G-115KCL5ZKK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase()


export {database};