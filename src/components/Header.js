import React,{useEffect} from "react";
            import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();       
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
    
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email, displayName, photoURL} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //Unsubscribe when component unmounts
    return () => unsubscribe();
  },[])


  return (
    <div className=" absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src={LOGO}
        alt="logo"
      />

      {user && (<div className="flex p-2 m-2">
        <img className="w-10 h-10 m-1"
       
         src= "data:image/png;base64,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"
         alt= "usericon" 
         />
        <button
          onClick={handleSignOut}
          className=" bg-red-700 m-1 p-2 rounded-xl text-white"
        >
          Sign Out
        </button>
      </div>
)}
    </div>
  );
};

export default Header;
