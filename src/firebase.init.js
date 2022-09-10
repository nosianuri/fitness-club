// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpJRWgko2CVLZ1ez3tbyd-dxmynXDW-MU",
  authDomain: "fitness-club-4ecbc.firebaseapp.com",
  projectId: "fitness-club-4ecbc",
  storageBucket: "fitness-club-4ecbc.appspot.com",
  messagingSenderId: "408007831468",
  appId: "1:408007831468:web:297c81fc94e7bbcbab5409"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

export default app;