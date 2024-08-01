import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const navigate = useNavigate();
    // @ts-ignore
    const user = useSelector(store => store.user)

    const handleLogOut = () => {
        signOut(auth).then(() => {
            navigate('/')
        // Sign-out successful.
        }).catch(() => {
             navigate('/error')
        // An error happened.
        });

    }
  return (
        <div className='
            absolute px-8 py-2 bg-gradient-to-b from-black w-screen flex justify-between z-10'>
            <img className='w-40' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Logo" />
          {
              user && <div className='flex'>
              <img src={user?.photoURL } className='w-10 h-10'/>
              <button
                  className='text-white shadow-sm p-2'
                  onClick={handleLogOut }
              >Sign Out</button>
            </div>
          }
        </div>
  )
}

export default Header
