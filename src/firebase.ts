// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWg89vC5dZAhCLSVmhcOSXp8ZsYC8QOAA",
  authDomain: "shivai-auth-main.firebaseapp.com",
  projectId: "shivai-auth-main",
  storageBucket: "shivai-auth-main.appspot.com",
  messagingSenderId: "746495525249",
  appId: "1:746495525249:web:36e92b0eb9242bf4f1e880",
  measurementId: "G-XRJ7S9E02N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export  const auth = getAuth(app);