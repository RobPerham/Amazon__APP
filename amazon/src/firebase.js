import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNEMaaP_nR2KBMncVaG7FX4fqweDoeZFo",
  authDomain: "app-37f5e.firebaseapp.com",
  projectId: "app-37f5e",
  storageBucket: "app-37f5e.appspot.com",
  messagingSenderId: "188038820762",
  appId: "1:188038820762:web:081960d5a7333c634bc023",
  measurementId: "G-JWYWRTR1QN",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
