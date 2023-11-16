// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNU03T68EI79WjKZB7zIZqogCPCoJjg2s",
  authDomain: "netflixgpt-79d44.firebaseapp.com",
  projectId: "netflixgpt-79d44",
  storageBucket: "netflixgpt-79d44.appspot.com",
  messagingSenderId: "46952153809",
  appId: "1:46952153809:web:d5b551600258491c60fbf0",
  measurementId: "G-NS6LN1RCX1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();