// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmZlGhM6owsH3aCR9aHylXpkyVMF33rZw",
  authDomain: "blogapp-2f9fe.firebaseapp.com",
  projectId: "blogapp-2f9fe",
  storageBucket: "blogapp-2f9fe.appspot.com",
  messagingSenderId: "893336163595",
  appId: "1:893336163595:web:a450e4768c4c9c9f67be0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()