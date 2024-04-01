// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-daed7.firebaseapp.com",
  projectId: "mern-blog-daed7",
  storageBucket: "mern-blog-daed7.appspot.com",
  messagingSenderId: "383153404320",
  appId: "1:383153404320:web:dade6b64edea2ba2fd0cc5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
