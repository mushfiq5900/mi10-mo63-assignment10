// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB2uKeAE_8b-yzgHyI1phEbsJpp9BYQZ4A",
    authDomain: "assignment10-auth.firebaseapp.com",
    projectId: "assignment10-auth",
    storageBucket: "assignment10-auth.appspot.com",
    messagingSenderId: "910973811874",
    appId: "1:910973811874:web:8c98f17440fe13a9b66bfb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;