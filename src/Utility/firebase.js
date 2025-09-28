
import  firebase from "firebase/compat/app";
import {getAuth} from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBagKJy5xhew0xBXikm7xG7Euj2c8xOWnI",
  authDomain: "clone-25510.firebaseapp.com",
  projectId: "clone-25510",
  storageBucket: "clone-25510.firebasestorage.app",
  messagingSenderId: "915862455980",
  appId: "1:915862455980:web:2adb7ed1c85aebf0064109",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = app.firestore ()