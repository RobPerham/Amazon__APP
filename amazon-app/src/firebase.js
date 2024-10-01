import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBn3ceL3_vfLkKpkQtJu1wzVxJscR3kBho",
  authDomain: "app-1bb53.firebaseapp.com",
  projectId: "app-1bb53",
  storageBucket: "app-1bb53.appspot.com",
  messagingSenderId: "87879469153",
  appId: "1:87879469153:web:a59322d8e6971770604220",
  measurementId: "G-FW0HG89F5K",
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
