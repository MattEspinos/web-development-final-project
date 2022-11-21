// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUzipGvOTkcnu-bdcpTCDYyQ-bo5-bkbg",
  authDomain: "nhl-stats-43f0f.firebaseapp.com",
  projectId: "nhl-stats-43f0f",
  storageBucket: "nhl-stats-43f0f.appspot.com",
  messagingSenderId: "984762627715",
  appId: "1:984762627715:web:c7609e24eedcaae1cb8db6",
  measurementId: "G-2FX10CK156"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);