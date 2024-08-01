import React, { useState, useRef } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/Validate.js';
import { auth } from '../utils/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { bgImage } from '../utils/constants';

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignINForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInSignUp = () => {
    setIsSignINForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WpnGIPj1DKAGo-CP64znTwHaHa%26pid%3DApi%26h%3D160&f=1&ipt=9b44ad590bec765bbe0e8acecf10c34059964ed4d1bfca892e18d730327d217a&ipo=images',
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              // ...
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ' ' + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then(() => {
          // Signed in
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ' ' + errorMessage);
        });
    }
  };
  return (
    <>
      <Header />
      <div className="absolute">
        <img src={bgImage} />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-24 mx-auto right-0 left-0 bg-opacity-70"
      >
        <h1 className="font-bold test-3xl py-4 text-white">
          {isSignInForm ? 'Sign IN' : 'Sign UP'}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-4 m-2 mt-4 w-full bg-gray-800 text-white"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email address"
          className="p-4 m-2 mt-4 w-full bg-gray-800 text-white"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 m-2 w-full mb-4 bg-gray-800 text-white"
        />
        <p className="text-red-500 font-bold">{errorMessage}</p>
        <button
          onClick={handleButtonClick}
          className="bg-red-700 p-3 m-2 w-full rounded-lg text-white"
        >
          {isSignInForm ? 'Sign IN' : 'Sign UP'}
        </button>
        <p className="py-4 text-white" onClick={toggleSignInSignUp}>
          {isSignInForm
            ? 'New To NetFlix? Sign Up Now'
            : 'Already Have an Account Sign IN'}
        </p>
      </form>
    </>
  );
};

export default Login;
