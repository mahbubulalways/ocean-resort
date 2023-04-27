// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoxrjHTwAHzA8nOZLpxtnNZ9YD14SFpvE",
  authDomain: "ocean-resort-54518.firebaseapp.com",
  projectId: "ocean-resort-54518",
  storageBucket: "ocean-resort-54518.appspot.com",
  messagingSenderId: "731244093554",
  appId: "1:731244093554:web:b42e63bcb7a0c151b8e2eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app