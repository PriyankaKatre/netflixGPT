import React, { useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { logo } from '../utils/constants';


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // @ts-ignore
  const user = useSelector((state) => state.user);

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch(() => {
        navigate('/error');
        // An error happened.
      });
  };

  //This useEffect is for only call below event listner once
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate('/browse');
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate('/');
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-screen flex justify-between z-10">
      <img className="w-40" src={logo} alt="Logo" />
      {user && (
        <div className="flex">
          <img src={user?.photoURL} className="w-10 h-10" />
          <button className="text-white shadow-sm p-2" onClick={handleLogOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
