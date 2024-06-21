//Netflix Realted Constants
export const NETFLIX_LOGO =
  'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png';
export const ACCOUNT_ICON =
  'https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e';
export const PROFILE_AVATAR =
  'https://plus.unsplash.com/premium_photo-1664533227571-cb18551cac82?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
export const ERROR_PAGE_IMAGE =
  'https://assets.nflxext.com/ffe/siteui/pages/errors/bg-lost-in-space.png';
// export const GPT_SEARCH_IMAGE =
//   'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
export const GPT_SEARCH_IMAGE =
  'https://images.unsplash.com/photo-1610296669228-602fa827fc1f?q=80&w=2875&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
//TMDB Related Constants
export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_READ_ACCESS_TOKEN}`,
  },
};
export const POSTER_PATH_ORIGINAL = 'https://image.tmdb.org/t/p/original';
export const POSTER_PATH_W500 = 'https://image.tmdb.org/t/p/w500';
export const BACKDROP_PATH_ORIGINAL = 'https://image.tmdb.org/t/p/original';
export const BACKDROP_PATH_W500 = 'https://image.tmdb.org/t/p/w500';
//Language Constants
export const LANGUAGES = [
  { id: 'en', name: 'English' },
  { id: 'esp', name: 'Spanish' },
  { id: 'fr', name: 'French' },
  { id: 'de', name: 'German' },
  { id: 'hi', name: 'Hindi' },
  { id: 'ch', name: 'Chinese' },
  {id:'ur',name:'Urdu'},
];
