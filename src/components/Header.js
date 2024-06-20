import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { FaCaretDown } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { removeUser, addUser } from '../utils/userSlice';
import { setGptSearch } from '../utils/gptSlice';
import { useLocation } from 'react-router-dom';
import { ACCOUNT_ICON, NETFLIX_LOGO, LANGUAGES } from '../utils/consants';
import Select from 'react-select';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const isGptSearch = useSelector((state) => state.gpt.isGptSearch);
  const selectedLang = useSelector((state) => state.config.lang);

  const goToAccount = () => {
    navigate('/account');
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        navigate('/error');
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
    const subscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          addUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
          })
        );
      } else {
        dispatch(removeUser());
      }
    });
    return () => subscribe();
  }, []);

  useEffect(() => {
    if (location.pathname === '/gptsearch') {
      dispatch(setGptSearch(true));
    } else {
      dispatch(setGptSearch(false));
    }
  }, [location, dispatch]);

  const handleGptSearchClick = () => {
    if (isGptSearch) {
      navigate('/browse');
    } else {
      navigate('/gptsearch');
    }
  };

  const languageOptions = LANGUAGES.map((lang) => ({
    value: lang.id,
    label: lang.name,
  }));

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid white',
      color: 'white',
      fontSize: '1rem',
      fontWeight: 'bold',
      width: 'auto',
      minWidth: '180px',
      borderRadius: state.menuIsOpen ? '4px 4px 0 0' : '4px',
      boxShadow: 'none',
      '&:hover': {
        borderColor: 'white',
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'white',
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
      borderRadius: '0 0 4px 4px',
      marginTop: '0',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? 'rgba(255, 255, 255, 0.2)'
        : 'transparent',
      color: 'white',
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
      },
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: 'white',
      '&:hover': {
        color: 'white',
      },
    }),
    indicatorSeparator: () => ({}),
    placeholder: (provided) => ({
      ...provided,
      color: 'white',
    }),
  };

  return (
    <div className="flex justify-between items-center absolute w-full py-2 px-8 bg-gradient-to-b from-black z-10">
      <div className="flex items-center">
        <Link to="/browse">
          <img
            className="w-44 cursor-pointer"
            src={NETFLIX_LOGO}
            alt="Logo"
            onClick={() => navigate('/browse')}
          />
        </Link>
        {user && location.pathname !== '/account' && !isGptSearch && (
          <div className="flex space-x-4 ml-10">
            <button
              onClick={() => navigate('/browse')}
              className={`text-white text-lg ${
                location.pathname === '/browse' ? 'font-bold' : 'font-normal'
              }`}
            >
              Movies
            </button>
            <button
              onClick={() => navigate('/tvshows')}
              className={`text-white text-lg ${
                location.pathname === '/tvshows' ? 'font-bold' : 'font-normal'
              }`}
            >
              TV Shows
            </button>
          </div>
        )}
      </div>
      {user && (
        <div className="flex items-center space-x-4">
          {isGptSearch && (
            <div className="flex items-center">
              <Select
                value={languageOptions.find(
                  (option) => option.value === selectedLang
                )}
                onChange={(selectedOption) =>
                  dispatch(changeLanguage(selectedOption.value))
                }
                options={languageOptions}
                styles={customStyles}
                components={{
                  IndicatorSeparator: () => null,
                }}
              />
            </div>
          )}
          {location.pathname !== '/account' && (
            <button
              onClick={handleGptSearchClick}
              className="bg-white bg-opacity-10 text-white border border-white py-2 px-4 rounded font-semibold hover:bg-opacity-20 transition duration-300"
            >
              {isGptSearch ? 'Back to Netflix' : "Can't Decide? Ask GPT"}
            </button>
          )}
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
        </div>
      )}
    </div>
  );
};

export default Header;

// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { signOut } from 'firebase/auth';
// import { FaCaretDown } from 'react-icons/fa';
// import { useDispatch, useSelector } from 'react-redux';
// import { onAuthStateChanged } from 'firebase/auth';
// import { auth } from '../utils/firebase';
// import { removeUser, addUser } from '../utils/userSlice';
// import { setGptSearch } from '../utils/gptSlice';
// import { useLocation } from 'react-router-dom';
// import { ACCOUNT_ICON, NETFLIX_LOGO } from '../utils/consants';
// import { Link } from 'react-router-dom';
// const Header = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const user = useSelector((state) => state.user);
//   const isGptSearch = useSelector((state) => state.gpt.isGptSearch);

//   const goToAccount = () => {
//     navigate('/account');
//   };

//   const handleSignOut = () => {
//     signOut(auth)
//       .then(() => {
//         navigate('/');
//       })
//       .catch((error) => {
//         navigate('/error');
//       });
//   };

//   useEffect(() => {
//     if (!user && location.pathname !== '/') {
//       navigate('/');
//     } else if (user && location.pathname === '/') {
//       navigate('/browse');
//     }
//   }, [user, location]);

//   useEffect(() => {
//     const subscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         dispatch(
//           addUser({
//             uid: user.uid,
//             email: user.email,
//             displayName: user.displayName,
//             photoURL: user.photoURL,
//           })
//         );
//       } else {
//         dispatch(removeUser());
//       }
//     });
//     return () => subscribe();
//   }, []);

//   useEffect(() => {
//     if (location.pathname === '/gptsearch') {
//       dispatch(setGptSearch(true));
//     } else {
//       dispatch(setGptSearch(false));
//     }
//   }, [location, dispatch]);

//   const handleGptSearchClick = () => {
//     if (isGptSearch) {
//       navigate('/browse');
//     } else {
//       navigate('/gptsearch');
//     }
//   };

//   return (
//     <div className="flex justify-between items-center absolute w-full py-2 px-8 bg-gradient-to-b from-black z-10">
//       <div className="flex items-center">
//         <Link to="/browse">
//           <img
//             className="w-44 cursor-pointer"
//             src={NETFLIX_LOGO}
//             alt="Logo"
//             onClick={() => navigate('/browse')}
//           />
//         </Link>
//         {user && !isGptSearch && (
//           <div className="flex space-x-4 ml-10">
//             <button
//               onClick={() => navigate('/browse')}
//               className={`text-white text-lg ${
//                 location.pathname === '/browse' ? 'font-bold' : 'font-normal'
//               }`}
//             >
//               Movies
//             </button>
//             <button
//               onClick={() => navigate('/tvshows')}
//               className={`text-white text-lg ${
//                 location.pathname === '/tvshows' ? 'font-bold' : 'font-normal'
//               }`}
//             >
//               TV Shows
//             </button>
//           </div>
//         )}
//       </div>
//       {user && (
//         <div className="flex items-center space-x-4">
//           <button
//             onClick={handleGptSearchClick}
//             className="bg-white bg-opacity-10 text-white border border-white py-2 px-4 rounded font-semibold hover:bg-opacity-20 transition duration-300"
//           >
//             {isGptSearch ? 'Back to Netflix' : "Can't Decide? Ask GPT"}
//           </button>

//           <div className="relative group z-100">
//             <div className="flex items-center cursor-pointer">
//               <img
//                 className="w-11 h-11 rounded"
//                 src={ACCOUNT_ICON}
//                 alt="Profile"
//               />
//               <FaCaretDown className="ml-2 text-white" />
//             </div>
//             <div
//               className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 transform translate-y-2 z-20"
//               style={{ background: 'rgba(0,0,0,0.7)' }}
//             >
//               <div
//                 onClick={goToAccount}
//                 className="px-4 py-2 hover:underline cursor-pointer text-white"
//               >
//                 Account
//               </div>
//               <div
//                 onClick={handleSignOut}
//                 className="px-4 py-2 hover:underline cursor-pointer text-white"
//               >
//                 Sign Out
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Header;
