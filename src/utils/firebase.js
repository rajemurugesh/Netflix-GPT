// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4jWc6Ru2h8-16-xJ7236LehASJHi_8Xo",
  authDomain: "movieappgpt-81dff.firebaseapp.com",
  projectId: "movieappgpt-81dff",
  storageBucket: "movieappgpt-81dff.appspot.com",
  messagingSenderId: "950076484110",
  appId: "1:950076484110:web:234b082c0270cb76546a5f",
  measurementId: "G-X3MMJZ3CHK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();