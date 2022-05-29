// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import * as firebase from "firebase/app";
// SDKs for Firebase products that you want to use
import "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

require("firebase/firestore");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnIaFcxa_VG-3kE65qgakoLZDgJCzac64",
  authDomain: "weatherwidgetapp-20b37.firebaseapp.com",
  projectId: "weatherwidgetapp-20b37",
  storageBucket: "weatherwidgetapp-20b37.appspot.com",
  messagingSenderId: "193530925791",
  appId: "1:193530925791:web:e3e80757507ad093d34f6a"
};

// Initialize Firebase
// const FirebaseApp = initializeApp(firebaseConfig);
export default firebase.initializeApp(firebaseConfig);
