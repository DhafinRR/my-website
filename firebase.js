// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBa6M8QbIK-GzhJ419X5Xnmub4zuSye2K0",
    authDomain: "my-portofolio-1f074.firebaseapp.com",
    projectId: "my-portofolio-1f074",
    storageBucket: "my-portofolio-1f074.appspot.com",
    messagingSenderId: "1035152401168",
    appId: "1:1035152401168:web:455da0bfce2e1f4ed27b95",
    measurementId: "G-MBR38NCH42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);