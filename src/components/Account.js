// import React from 'react';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import Header from './Header';
// import { FaUserCircle } from 'react-icons/fa';
// import { ClipLoader } from 'react-spinners';
// import { FaArrowLeft } from 'react-icons/fa';
// import useClearGPT from '../utils/useClearGPT';
// const Account = () => {
//   const user = useSelector((state) => state.user);
//   const navigate = useNavigate();
// import useClearGPT from '../utils/useClearGPT';
// useClearGPT();
//   const handleBackToNetflix = () => {
//     navigate('/browse');
//   };

//   // React.useEffect(() => {
//   //   if (!user) {
//   //     navigate('/');
//   //   }
//   // }, [user, navigate]);

//   if (!user) {
//      navigate('/');
//     return (
//       <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
//         <h1 className="text-white">Please Login First</h1>
//       </div>
//     );
//   }
// // if(!user){
// //   navigate('/');
// //   return null;
// // }
//   return (
//     <div className="min-h-screen bg-black text-white">
//       <Header />
//       <div className="flex min-h-screen">
//         <div className="w-1/4 flex items-center justify-center p-4">
//           <button
//             onClick={handleBackToNetflix}
//             className="bg-red-600 text-white py-2 px-4 rounded flex items-center hover:bg-red-700 transition duration-300"
//           >
//             <FaArrowLeft className="mr-2" />
//             Back To Netflix
//           </button>
//         </div>
//         <div className="w-3/4 flex flex-col items-center justify-center p-8">
//           <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-sm w-full">
//             <div className="flex items-center mb-6">
//               {user.photoURL ? (
//                 <img
//                   src={user.photoURL}
//                   alt="Profile"
//                   className="w-16 h-16 rounded-full mr-4"
//                 />
//               ) : (
//                 <div className="w-16 h-16 bg-gray-400 rounded-full mr-4 flex items-center justify-center text-6xl text-gray-400">
//                   <span className="text-white">
//                     {user.displayName ? user.displayName[0] : 'U'}
//                   </span>
//                 </div>
//               )}
//               <div>
//                 <h2 className="text-2xl font-bold text-gray-100">
//                   Account Details
//                 </h2>
//               </div>
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-400 text-sm font-bold mb-2">
//                 Name
//               </label>
//               <p className="border-b-2 border-gray-700 pb-2 text-gray-200">
//                 {user.displayName ? user.displayName : ''}
//               </p>
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-400 text-sm font-bold mb-2">
//                 Email
//               </label>
//               <p className="border-b-2 border-gray-700 pb-2 text-gray-200">
//                 {user.email ? user.email : ''}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Account;
import useClearGPT from '../utils/useClearGPT';

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import { FaUserCircle } from 'react-icons/fa';
import { ClipLoader } from 'react-spinners';
import { FaArrowLeft } from 'react-icons/fa';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGIN_PAGE_IMAGE } from '../utils/consants';

const Account = () => {
  useClearGPT();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isBigScreen, setIsBigScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsBigScreen(window.innerWidth >= 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
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
        navigate('/');
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleBackToNetflix = () => {
    navigate('/browse');
  };

  if (user === null) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <ClipLoader color="#ffffff" size={50} />
      </div>
    );
  }

  return (
    <div
      className="min-h-screen text-white bg-black opacity-90"
      style={{
        position: 'relative',
        backgroundImage: `url(${LOGIN_PAGE_IMAGE})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'black',
          opacity: 0.8,
          zIndex: -1, 
        }}
      ></div>
      <Header />
      <div className="flex flex-col md:flex-row min-h-screen pt-20 ">
        <div className="w-3/5  md:w-1/4 self-center md:self-auto  md:mt-0 flex items-center justify-center p-4">
          <button
            onClick={handleBackToNetflix}
            className="bg-red-600 text-white py-2 px-4 rounded flex items-center hover:bg-red-700 transition duration-300"
          >
            <FaArrowLeft className="mr-2" />
            Back To Netflix
          </button>
        </div>
        <div className="w-5/6  self-center md:self-auto  flex flex-col items-center justify-center p-8">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-sm w-full">
            <div className="flex items-center mb-6">
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="Profile"
                  className="w-16 h-16 rounded-full mr-4"
                />
              ) : (
                <div className="w-16 h-16 bg-gray-400 rounded-full mr-4 flex items-center justify-center text-6xl text-gray-400">
                  <span className="text-white">
                    {user.displayName ? user.displayName[0] : 'U'}
                  </span>
                </div>
              )}
              <div>
                <h2 className="text-2xl font-bold text-gray-100">
                  Account Details
                </h2>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-400 text-sm font-bold mb-2">
                Name
              </label>
              <p className="border-b-2 border-gray-700 pb-2 text-gray-200">
                {user.displayName ? user.displayName : ''}
              </p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-400 text-sm font-bold mb-2">
                Email
              </label>
              <p className="border-b-2 border-gray-700 pb-2 text-gray-200">
                {user.email ? user.email : ''}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
