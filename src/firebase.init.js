// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBC-95WaXrhjcZmdk9YJEcJBcYGVTJivX4",
    authDomain: "doctors-portal-6ed8b.firebaseapp.com",
    projectId: "doctors-portal-6ed8b",
    storageBucket: "doctors-portal-6ed8b.appspot.com",
    messagingSenderId: "912966162432",
    appId: "1:912966162432:web:972c8efb68cd3416efe0e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth