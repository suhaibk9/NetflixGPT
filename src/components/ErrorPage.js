import React from 'react';
import { ERROR_PAGE_IMAGE, NETFLIX_LOGO } from '../utils/consants';
import { useNavigate, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  let errorCode = error ? error?.statusText : error?.message;
  if (!errorCode) errorCode = 'NSES-404';
  const handleNavigateHome = () => {
    navigate('/');
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${ERROR_PAGE_IMAGE})` }}
    >
      <header className="absolute top-0 left-0 w-full bg-black p-4 flex items-center justify-between">
        <img
          src={NETFLIX_LOGO}
          alt="Netflix Logo"
          className="h-8 cursor-pointer"
          onClick={handleNavigateHome}
        />
      </header>
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1
            className="text-6xl mb-4"
            style={{
              fontSize: '6em',
              fontWeight: '500',
              textShadow: '0 1px 2px rgba(0,0,0,.57)',
            }}
          >
            Lost Your Way?
          </h1>
          <p
            className="text-2xl mb-6"
            style={{
              fontSize: '2em',
              fontWeight: '300',
              textShadow: '0 1px 2px rgba(0,0,0,.57)',
            }}
          >
            Sorry, we can't find the page. You will find lots to explore on the
            home page.
          </p>
          <button
            onClick={handleNavigateHome}
            className="bg-white text-black py-3 px-6 rounded font-semibold hover:bg-gray-200 transition duration-300"
          >
            Netflix Home
          </button>
          <div
            className="mt-40  text-gray-400 text-2xl"
            style={{ lineHeight: '2.2em' }}
          >
            <span className=" pl-1 border-l-2 border-solid border-[red]">
              ERROR CODE
            </span>{' '}
            &nbsp;
            <span className="text-white font-normal">{errorCode}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
