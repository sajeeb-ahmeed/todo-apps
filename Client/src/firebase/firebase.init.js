// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAjkuo5fGoHmtNAtReCZbB_FtjvSbl5t6E",
    authDomain: "todo-item.firebaseapp.com",
    projectId: "todo-item",
    storageBucket: "todo-item.appspot.com",
    messagingSenderId: "968443707413",
    appId: "1:968443707413:web:53d97b2beab1001f8dce1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;