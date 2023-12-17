// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFHbU6Qvy-OxKuuF59Mg3wZNzxIUStzfE",
  authDomain: "last-visit-web.firebaseapp.com",
  projectId: "last-visit-web",
  storageBucket: "last-visit-web.appspot.com",
  messagingSenderId: "768271597572",
  appId: "1:768271597572:web:2298c68a8c5aa01356b551",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
