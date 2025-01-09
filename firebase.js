// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbHa7r36uQSO1iWBb5ePrIAK73vQYTbdA",
  authDomain: "portofolio-edd9a.firebaseapp.com",
  projectId: "portofolio-edd9a",
  storageBucket: "portofolio-edd9a.firebasestorage.app",
  messagingSenderId: "830369661744",
  appId: "1:830369661744:web:5ef2b6713086f0fdf67ef5",
  measurementId: "G-E5XJCG7LDE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };