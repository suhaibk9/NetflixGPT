import React, { useState } from 'react';
import Header from './Header';
import { useRef } from 'react';
import { checkValidData } from '../utils/validate';
import { auth } from '../utils/firebase';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useClearGPT from '../utils/useClearGPT';
import { addUser } from '../utils/userSlice';
import { LOGIN_PAGE_IMAGE, PROFILE_AVATAR } from '../utils/consants';
const Login = () => {
  useClearGPT();
  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(true);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);
  const [formError, setFormError] = useState('');
  const cleanInput = () => {
    if (nameRef.current) nameRef.current.value = '';
    emailRef.current.value = '';
    passwordRef.current.value = '';
  };
  const navigate = useNavigate();
  const handleToggle = () => {
    cleanInput();
    setFormError('');
    setIsSignIn(!isSignIn);
  };
  //   useEffect(() => {
  //     if (!useSelector((state) => state.user)) {
  //       cleanInput();
  //     }
  //   }, [useSelector((state) => state.user)]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError('');
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const name = nameRef.current ? nameRef.current.value : '';
    const validationError = checkValidData(email, password, isSignIn, name);
    if (validationError) {
      setFormError(validationError);
    } else {
      setFormError('');
      if (!isSignIn) {
        //Sign Up
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(auth.currentUser, {
              displayName: name,
              photoURL: PROFILE_AVATAR,
            })
              .then(() => {
                //Trying out Direct Update
                dispatch(
                  addUser({
                    uid: user.uid,
                    email: user.email,
                    displayName: name,
                    photoURL: PROFILE_AVATAR,
                  })
                );
                navigate('/browse');
              })
              .catch((error) => {
                setFormError(error.message);
              });
            cleanInput();
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if (errorCode === 'auth/email-already-in-use') {
              setFormError('Email already in use.');
            } else {
              const fullError = `${errorCode}: ${errorMessage}`;
              setFormError(fullError);
            }
          });
      } else {
        //Sign In
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            cleanInput();
            navigate('/browse');
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if (errorCode === 'auth/user-not-found') {
              setFormError('User not found.');
            } else if (errorCode === 'auth/invalid-credential') {
              setFormError('Invalid credentials, please try again.');
            } else if (errorCode === 'auth/weak-password') {
              setFormError('Password should be at least 6 characters long.');
            } else {
              const fullError = `${errorCode}: ${errorMessage}`;
              setFormError(fullError);
            }
          });
      }
    }
  };
  return (
    <div className="relative min-h-screen bg-black">
      <Header />
      <div className="absolute inset-0 z-0">
        <img
          src={LOGIN_PAGE_IMAGE}
          alt="Background"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex justify-center items-center min-h-screen relative z-10">
        <form
          className="p-8 rounded-lg w-full max-w-md"
          style={{ background: 'rgba(0,0,0,0.7)' }}
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
            onClick={handleSubmit}
            type="submit"
            className="w-full py-3 mb-4 bg-red-600 text-white rounded font-semibold hover:bg-red-700"
          >
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </button>
          <div className=" mb-4">
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
