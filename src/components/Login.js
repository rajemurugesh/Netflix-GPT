import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidate } from "../utils/validate";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import {  updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import {BACKGROUND_IMG, USER_AVATAR} from "../utils/constants"

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const fname = useRef();
  const email = useRef();
  const password = useRef();

  const handleButtonClick = () => {
    //validate the form data

    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    // const nameValue = isSignInForm ? null : name.current.value;

    // console.log(name.current.value);
    console.log(email.current.value);
    console.log(password.current.value);

    const message = checkValidate(emailValue, passwordValue);
    console.log(message);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      //Sign Up Logic
      createUserWithEmailAndPassword(
        auth, 
        emailValue, 
        passwordValue
        )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fname.current.value, 
            photoURL: USER_AVATAR,
          }).then(() => {
            const {uid,email, displayName, photoURL} = auth.currentUser;
        dispatch(
          addUser({
            uid: uid, 
            email: email, 
            displayName: displayName, 
            photoURL: photoURL}));
            
          }).catch((error) => {
            setErrorMessage(error.message);
          });
          console.log(user);
       
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+ "-" +errorMessage);
        });
    } else {
      //Sign In Logic
      signInWithEmailAndPassword(
        auth,
        emailValue, 
        passwordValue
        )
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode +"-"+ errorMessage)
  });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BACKGROUND_IMG}
          alt="backgroun-img"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={fname}
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 w-full bg-gray-700 rounded-lg"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 my-4 w-full bg-gray-700 rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="p-2 my-4 w-full bg-gray-700 rounded-lg"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-2 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up now"
            : "Already registered? Sign In Now.."}
        </p>
      </form>
    </div>
  );
};

export default Login;
