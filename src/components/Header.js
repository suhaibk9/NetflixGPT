// import React from 'react';

// const Header = () => {
//   return (
//     <div className=" flex justify-between absolute w-full py-2 px-8 bg-gradient-to-b from-black z-10">
//       <img
//         className=" w-44 "
//         src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
//         alt="Logo"
//       />
//       <div>
//         <img className='w-11 mt-1 h-11 ' src="https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e" alt/>
//         <button className='text-white'>(Sign Out)</button>
//       </div>

//     </div>
//   );
// };

// export default Header;
import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { FaCaretDown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { removeUser } from '../utils/userSlice';

const Header = () => {
  const navigate = useNavigate();

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
  return (
    <div className="flex justify-between items-center absolute w-full py-2 px-8 bg-gradient-to-b from-black z-10">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Logo"
      />
      <div className="relative group z-40">
        <div className="flex items-center cursor-pointer">
          <img
            className="w-11 h-11 rounded"
            src="https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e"
            alt="Profile"
          />
          <FaCaretDown className="ml-2 text-white" />
        </div>
        <div
          className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 transform translate-y-2 z-20"
          style={{ background: 'rgba(0,0,0,0.7)' }}
        >
          <div className="px-4 py-2 hover:underline cursor-pointer text-white">
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
  );
};

export default Header;
