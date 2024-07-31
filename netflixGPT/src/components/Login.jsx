import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignIn, setIsSignIN ] = useState(true)
    const toggleSignInSignUp = () => {
        setIsSignIN(!isSignIn)
    }
  return (
    <div>
        <Header />
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/42fb78f2-f5de-4a30-a9c7-2e9d1e05d9b8/GB-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_b9a6d365-611b-4851-b907-4505b4230f79_large.jpg"/>
        </div>
          <from className='w-3/12 absolute p-12 bg-black my-24 mx-auto right-0 left-0 bg-opacity-70'>
              <h1 className='font-bold test-3xl py-4 text-white' >{isSignIn ? 'Sign IN' : 'Sign UP'}</h1>
              {
                !isSignIn && <input
                    type='text'
                    placeholder='Name'
                    className='p-4 m-2 mt-4 w-full bg-gray-800'
                />
              }

              <input
                type='text'
                placeholder='Email address'
                className='p-4 m-2 mt-4 w-full bg-gray-800'
              />
              <input
                type='password'
                placeholder='Password'
                className='p-4 m-2 w-full mb-4 bg-gray-800' />
              <button
                className='bg-red-700 p-3 m-2 w-full rounded-lg text-white'>
                { isSignIn ? 'Sign IN' : 'Sign UP'}
              </button>
              <p className='py-4 text-white' onClick={toggleSignInSignUp}>
                  { isSignIn ? 'New To NetFlix? Sign Up Now' : 'Already Have an Account Sign IN'} </p>
        </from>
    </div>
  )
}

export default Login
