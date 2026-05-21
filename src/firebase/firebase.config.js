// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCLOZ0K3j_jzQ5zRYV7x1VhR-NFAIypdME",
    authDomain: "dragon-news-1bbc6.firebaseapp.com",
    projectId: "dragon-news-1bbc6",
    storageBucket: "dragon-news-1bbc6.firebasestorage.app",
    messagingSenderId: "1008625871198",
    appId: "1:1008625871198:web:599f781dc1aa47c5e5c7cf",
    measurementId: "G-LCQPM1B42M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;