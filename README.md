# NetflixGPT

NetflixGPT is a Netflix clone that fetches TV shows and movies from The TMDB API. It leverages Firebase for authentication to store user names and passwords and uses React Router DOM for routing. The app includes React Icons and React-Select for an enhanced UI/UX experience. The entire app is styled using Tailwind CSS for a responsive and modern design.

## Why GPT in NetflixGPT?

The "GPT" in NetflixGPT stands for Generative Pre-trained Transformer, an advanced AI model developed by OpenAI. This integration allows the app to provide intelligent movie recommendations directly within the app, enhancing the user experience beyond traditional recommendation systems.

## Features

- **Movie and TV Show Cards**: Users can view cards of movies and TV shows similar to Netflix. Clicking on a card displays detailed information about the selected movie or TV show, along with its trailer or teaser directly from YouTube.
- **Account Section**: Users can view their account details.
- **Multiple Movie Categories**: The app features different sliders for various categories such as popular movies, top-rated movies, upcoming movies, and more. This categorization also applies to TV shows.
- **GPT-3.5 Integration**: The app integrates OpenAI's GPT-3.5 API, allowing users to ask for movie recommendations directly within the app.
- **Responsive Design**: The app is fully responsive and functional on various devices.
- **Language Selection**: On the GPT Search Page, users can select their preferred language.

## Tech Stack

- **React**: For building the user interface.
- **Firebase**: For authentication and storing user credentials.
- **TMDB API**: For fetching movie and TV show data.
- **OpenAI GPT-3.5**: For generating movie recommendations.
- **React Router DOM**: For routing.
- **React Icons**: For icons.
- **React-Select**: For customizable select inputs.
- **Tailwind CSS**: For styling the app.

## Screenshots

### Sign In Page
<img width="1434" alt="Sign In Page" src="https://github.com/suhaibk9/NetflixGPT/assets/19365397/961eeabd-364d-4592-ab78-0d36b12e973b">

### Movies (Home) Page
<img width="1440" alt="Movies (Home) Page" src="https://github.com/suhaibk9/NetflixGPT/assets/19365397/f2b5fe06-df24-4f8a-9586-c88477838e54">

<img width="1440" alt="Movies (Home) Page" src="https://github.com/suhaibk9/NetflixGPT/assets/19365397/c9cac757-e539-4fce-bdd1-08c1158f577e">

### TV Shows Page
<img width="1437" alt="TV Shows Page" src="https://github.com/suhaibk9/NetflixGPT/assets/19365397/c8769ea7-a480-4b5b-a241-927d568baa3e">

<img width="1440" alt="TV Shows Page" src="https://github.com/suhaibk9/NetflixGPT/assets/19365397/0c90d9b6-671c-4532-b046-0d9a0aaa1a0c">

### GPT Search Page
<img width="1440" alt="GPT Search Page" src="https://github.com/suhaibk9/NetflixGPT/assets/19365397/d5fc6089-2cc7-4136-ae64-214d2e6b8258">

<img width="1434" alt="GPT Search Page" src="https://github.com/suhaibk9/NetflixGPT/assets/19365397/a377dc2d-7163-47ef-843a-0207e0fccde2">

### GPT Search Page with Language Chosen as German
<img width="1440" alt="GPT Search Page with Language Chosen as German" src="https://github.com/suhaibk9/NetflixGPT/assets/19365397/d3c60023-e55d-4fec-821e-8dfd08f6f9d3">

## Routing

- `/` - Login and signup
- `/browse` - Home page and movies section
- `/tvshows` - TV shows section
- `/account` - Account section
- `/gptsearch` - GPT search section
- `/movie/:tmdbidofmovie` - Movie details page
- `/tv/:tmdbidoftv` - TV show details page

## File Structure

```
netflix-gpt
│   README.md
│   node_modules
│   package.json
│   public
│   tailwind.config.js
│
└───src
    │   App.js
    │   App.css
    │   index.js
    │   reportWebVitals.js
    │   setupTests.js
    │
    ├───components
    │   │   Account.js
    │   │   Browse.js
    │   │   GPTSearch.js
    │   │   ...
    │
    ├───hooks
    │   │   useGenresList.js
    │   │   useMediaDetails.js
    │   │   ...
    │
    └───utils
        │   appStore.js
        │   firebase.js
        │   gptSlice.js
        │   ...
```

## Links

- **Live URL**: [NetflixGPT](https://netflixgpt-react-front.vercel.app/)
- **LinkedIn**: [Suhaib Khan](https://www.linkedin.com/in/suhaibk9/)
- **Email**: [suhaib0900@gmail.com](mailto:suhaib0900@gmail.com)

Enjoy your NetflixGPT experience!
