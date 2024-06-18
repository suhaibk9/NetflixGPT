// import React from 'react';
// import { useSelector } from 'react-redux';
// import { FaUserCircle } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
// import Header from './Header';

// const Account = () => {
//   const user = useSelector((state) => state.user);
//   const navigate = useNavigate();

//   const handleBackToNetflix = () => {
//     navigate('/browse');
//   };
//   if(!user){
//     navigate('/');
//     return <h1>Signed Out</h1>
//   }
//   return (
//     <div className="min-h-screen bg-black text-white">
//       <Header />
//       <div className="flex min-h-screen">
//         <div className="w-1/4 flex items-center justify-center p-4">
//           <button
//             onClick={handleBackToNetflix}
//             className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300"
//           >
//             Back To Netflix
//           </button>
//         </div>
//         <div className="w-3/4 flex flex-col items-center justify-center p-8">
//           <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-sm w-full">
//             <div className="flex items-center mb-6">
//               <FaUserCircle className="text-6xl text-gray-400 mr-4" />
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
//                 {user.displayName? user.displayName : ''}
//               </p>
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-400 text-sm font-bold mb-2">
//                 Email
//               </label>
//               <p className="border-b-2 border-gray-700 pb-2 text-gray-200">
//                 {user.email? user.email : ''}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Account;
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import { FaUserCircle } from 'react-icons/fa';
import { ClipLoader } from 'react-spinners';
const Account = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleBackToNetflix = () => {
    navigate('/browse');
  };

  if (!user) {
    navigate('/');
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <ClipLoader color="#ffffff" size={150} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="flex min-h-screen">
        <div className="w-1/4 flex items-center justify-center p-4">
          <button
            onClick={handleBackToNetflix}
            className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300"
          >
            Back To Netflix
          </button>
        </div>
        <div className="w-3/4 flex flex-col items-center justify-center p-8">
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
