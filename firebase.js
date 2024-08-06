// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAY6jxkxg_BA-l5lVFZ_za-X9ttfJABD6Q",
    authDomain: "inventory-management-3e92e.firebaseapp.com",
    projectId: "inventory-management-3e92e",
    storageBucket: "inventory-management-3e92e.appspot.com",
    messagingSenderId: "645064430388",
    appId: "1:645064430388:web:cd8e8d603dc1f175ee4b61",
    measurementId: "G-J9KDZ63PWV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore }
