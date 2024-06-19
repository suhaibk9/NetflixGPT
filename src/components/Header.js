import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useEffect } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { removeUser, addUser } from '../utils/userSlice';
import { useLocation } from 'react-router-dom';
import { ACCOUNT_ICON, NETFLIX_LOGO } from '../utils/consants';
const Header = () => {
  const location = useLocation();
  //Will Give you the current location of the page example if you are on /browse it will give you /browse
  console.log('location', location.pathname);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const goToAccount = () => {
    console.log('Navigating to account');
    navigate('/account');
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        {
          navigate('/error');
        }
      });
  };
  useEffect(() => {
    if (!user && location.pathname !== '/') {
      navigate('/');
    } else if (user && location.pathname === '/') {
      navigate('/browse');
    }
  }, [user, location]);
  useEffect(() => {
    //UseEffect will run once and setup once onAuthStateChanged is like an event listener once setup it will listen for changes in authentication.
    //You can say onAuthStateChanged is a useEffect for authentication useEffect(()=>{},[auth])
    const subscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //User is signed in
        dispatch(
          addUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
          })
        );
        // navigate('/browse');
      } else {
        //User is signed out
        dispatch(removeUser());
        // navigate('/');
      }
    });
    return () => subscribe();
  }, []);
  return (
    <div className="flex justify-between items-center absolute w-full py-2 px-8 bg-gradient-to-b from-black z-10">
      <img className="w-44" src={NETFLIX_LOGO} alt="Logo" />
      {user && (
        <div className="relative group z-40">
          <div className="flex items-center cursor-pointer">
            <img
              className="w-11 h-11 rounded"
              src={ACCOUNT_ICON}
              alt="Profile"
            />
            <FaCaretDown className="ml-2 text-white" />
          </div>
          <div
            className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 transform translate-y-2 z-20"
            style={{ background: 'rgba(0,0,0,0.7)' }}
          >
            <div
              onClick={goToAccount}
              className="px-4 py-2 hover:underline cursor-pointer text-white"
            >
              Account
            </div>
            <div
              onClick={handleSignOut}
              className="px-4 py-2 hover:underline cursor-pointer text-white"
            >
              Sign Out
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;


