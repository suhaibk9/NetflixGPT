import React, { useState, useRef } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);
  const [formError, setFormError] = useState('');

  const handleToggle = () => {
    setIsSignIn(!isSignIn);
    setFormError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const name = nameRef.current ? nameRef.current.value : '';
    const validationError = checkValidData(email, password, isSignIn, name);
    if (validationError) {
      setFormError(validationError);
    } else {
      setFormError('');
    }
  };

  return (
    <div className="relative min-h-screen bg-black">
      <Header />
      <div className="absolute inset-0 z-0">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/46378c44-9068-4001-a49b-e1f9ea788f5a/GB-en-20240610-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Background"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex justify-center items-center min-h-screen relative z-10">
        <form
          className="p-8 rounded-lg w-full max-w-md"
          style={{ background: 'rgba(0,0,0,0.7)' }}
          onSubmit={handleSubmit}
        >
          <h2 className="text-3xl font-bold mb-6 text-white">
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </h2>
          {!isSignIn && (
            <input
              ref={nameRef}
              type="text"
              placeholder="Name"
              style={{ background: 'rgba(70, 90, 126, 0.4)' }}
              className="block w-full p-3 mb-4 text-white rounded border border-gray-700 focus:outline-none focus:border-white"
            />
          )}
          <input
            ref={emailRef}
            type="email"
            placeholder="Email address"
            style={{ background: 'rgba(70, 90, 126, 0.4)' }}
            className="block w-full p-3 mb-4 text-white rounded border border-gray-700 focus:outline-none focus:border-white"
          />
          <input
            ref={passwordRef}
            type="password"
            placeholder="Password"
            style={{ background: 'rgba(70, 90, 126, 0.4)' }}
            className="block w-full p-3 mb-4 text-white rounded border border-gray-700 focus:outline-none focus:border-white"
          />
          {formError && <div className="mb-4 text-red-500">{formError}</div>}
          <button
            type="submit"
            className="w-full py-3 mb-4 bg-red-600 text-white rounded font-semibold hover:bg-red-700"
          >
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </button>
          <div className="mb-4">
            {isSignIn ? (
              <>
                <span
                  className="font-normal pr-1"
                  style={{ color: 'rgba(255,255,255,0.7)' }}
                >
                  New to Netflix?
                </span>
                <button
                  type="button"
                  style={{ color: 'rgb(255,255,255)' }}
                  className="font-medium hover:underline"
                  onClick={handleToggle}
                >
                  Sign up now.
                </button>
              </>
            ) : (
              <>
                <span
                  className="font-normal pr-1"
                  style={{ color: 'rgba(255,255,255,0.7)' }}
                >
                  Already a user?
                </span>
                <button
                  type="button"
                  style={{ color: 'rgb(255,255,255)' }}
                  className="font-medium hover:underline"
                  onClick={handleToggle}
                >
                  Sign in now.
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
