// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9OP8r0LYDz3YezAMH81dinADMWvzACtU",
  authDomain: "module-52-d0c54.firebaseapp.com",
  projectId: "module-52-d0c54",
  storageBucket: "module-52-d0c54.appspot.com",
  messagingSenderId: "311157929369",
  appId: "1:311157929369:web:31f807f6c1f63ef8f2cf08",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
