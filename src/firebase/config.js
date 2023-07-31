// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3H_9TnI1L2QgXsKtnWn5ic-9Sbqn_fYc",
  authDomain: "eshop-rev.firebaseapp.com",
  projectId: "eshop-rev",
  storageBucket: "eshop-rev.appspot.com",
  messagingSenderId: "556116412593",
  appId: "1:556116412593:web:0751657e302a11f630ba90",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
