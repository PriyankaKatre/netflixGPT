import React, { useEffect } from 'react'
import Login from './Login.jsx'
import Browse from './Browse.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase.jsx'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice.js'


const Body = () => {
    const dispatch = useDispatch()

    //This useEffect is for only call below event listner once
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const { uid, email, displayName, photoURL} = user;
            dispatch(addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL
            }))
            // ...
        } else {
            // User is signed out
            dispatch(removeUser());
        }
        });
    },[])
    const appRouter = createBrowserRouter([
        {
          path: '/',
          element: <Login/>
        },
        {
          path: '/browse',
          element: <Browse />
        }
    ])
  return (
    <RouterProvider router={appRouter} />
  )
}

export default Body
