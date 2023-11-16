// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
//   apiKey: "AIzaSyBlqfdzQV_U7Irfhn5dUj4dG2LPCXqfa_o",
//   authDomain: "restaurant-management0.firebaseapp.com",
//   projectId: "restaurant-management0",
//   storageBucket: "restaurant-management0.appspot.com",
//   messagingSenderId: "3502451620",
//   appId: "1:3502451620:web:efc668f6af271f0d20ef31",
//   measurementId: "G-5Y9ERCF925"
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
  measurementId: import.meta.env.VITE_measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth