// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXsdEdbLqUyaUyf1wzv_NLAhXQEjcA4x0",
  authDomain: "netflixgpt-6e435.firebaseapp.com",
  projectId: "netflixgpt-6e435",
  storageBucket: "netflixgpt-6e435.appspot.com",
  messagingSenderId: "902277907454",
  appId: "1:902277907454:web:19ceb3eed98981048936af",
  measurementId: "G-RDJVWSMGGX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();
