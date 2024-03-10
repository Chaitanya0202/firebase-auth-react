
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD7sfP5HswcCTfGT11wIDR2SEkI2h8CKg8",
  authDomain: "react-auth-1a17c.firebaseapp.com",
  projectId: "react-auth-1a17c",
  storageBucket: "react-auth-1a17c.appspot.com",
  messagingSenderId: "822828054855",
  appId: "1:822828054855:web:d68b717f3adeadef1d3462"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth();
const provider=new GoogleAuthProvider();

export { app, auth ,provider};