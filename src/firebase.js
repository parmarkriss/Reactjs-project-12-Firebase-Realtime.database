// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANOQZTJ3z3JxUHe_FtHpBVsZ9ygEY7LgY",
  authDomain: "react-js-8dd21.firebaseapp.com",
  databaseURL: "https://react-js-8dd21-default-rtdb.firebaseio.com",
  projectId: "react-js-8dd21",
  storageBucket: "react-js-8dd21.appspot.com",
  messagingSenderId: "347870742002",
  appId: "1:347870742002:web:fe99c3fb437c074cf5976b",
  measurementId: "G-2TQLZ5BTBJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);