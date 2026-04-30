// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDe4dGiM4Wc-8S_GderBil0H9HIBj0BSus",
  authDomain: "bazar-models.firebaseapp.com",
  projectId: "bazar-models",
  storageBucket: "bazar-models.firebasestorage.app",
  messagingSenderId: "555641437476",
  appId: "1:555641437476:web:6f90cbf86767227d9807b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)