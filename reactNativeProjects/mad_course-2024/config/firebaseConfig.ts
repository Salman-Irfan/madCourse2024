// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC-izVYLOYqXiEFiNtBEs6JoIbMoWpynfk",
    authDomain: "mad2024-d3c67.firebaseapp.com",
    projectId: "mad2024-d3c67",
    storageBucket: "mad2024-d3c67.appspot.com",
    messagingSenderId: "1075249912741",
    appId: "1:1075249912741:web:0c63429265b0cf99f9664c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);