import React, { useEffect } from 'react';
import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import TVShows from './TVShows';
import ErrorPage from './ErrorPage';
import GPTSearch from './GPTSearch';
import { useDispatch } from 'react-redux';
import MediaDetails from './MediaDetails';
import Account from './Account';

const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/browse',
      element: <Browse />,
    },
    {
      path: '/tvshows',
      element: <TVShows />,
    },
    {
      path: '/account',
      element: <Account />,
    },
    {
      path: '/gptsearch',
      element: <GPTSearch />,
    },
    {
      path: '/movie/:id',
      element: <MediaDetails />,
    },
    {
      path: '/tv/:id',
      element: <MediaDetails />,
    },
    {
      path: '*',
      element: <ErrorPage />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
