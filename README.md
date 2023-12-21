# Netflix GPT

- Create React App
- Configured TailwindCSS
- Header
- Routing of App
- Login from
- Signup form
- Form Validation
- useRef Hook
- Firebase Setup
- Deploying our app to Production
- Create Sign up user account in firebase 
- Implement Sign In user API
- Created Redux Store with userSlice
- Implemented SignOut
- Update Profile
- Fetch from TMDB Movie
- Bugfix: Sign up user displayname and profile picture update 
- Bugfix: if the user is not logged in Redirect to /browse to login page and vice-versa
- Unsubscribed to the onAuthStateChanged callback
- Add hardcoded values to the constant file
- Register TMDB API & create an app & get access token
- Get data from TMDB now playing movies list API
- Custom hook for now Plating Movies
- Create movieSlice
- Update store with movies Data
- Planning for mainContainer and secondary container
- Fetch Data for Trailer Video
- Update Store with Trailer Video Data
- Embedded the Youtube video and make it autoplay and mute
- Tailwind Classes to make Main Container look awesome
- Build secondary container
- Build Movie List
- Build Movie Card
- TMDB Image CDN URL
- Made the Browse Page amazing with tailwind CSS
- usePopularMovies Custom Hooks
- useTopRatedMovies Custom Hooks
- useUpcomingMovies Custom Hooks
- GPT Search Feature
- GPT Search Page
- GPT Search Bar
- Multi language feature in gpt search
- Integrate GPT APIs(get openAI key)
- GPT Search API Call
- fetched GPT movie suggestions from TMDB
- gptSlice added data over there 
- Reused MovieList component to make movie suggestion container
- Memoization
- Added .env file 
- Added .env file to gitignore
- Made our site responsive 




# Features
- Login/Sign up page
    - Sign In / Sign up form
    - redirect to Browse page
- Browse (after authentication)
    - Header
    - Main movie
        - Trailer in background
        - Title and Description
        - Movie suggestions
            - Movielist * N

- Netflix GPT 
    - Search bar
    - Movie Suggestions    

- Steps for Deployment:
    1. Install firebase - `npm install -g firebase-tools`
    2. Firebase Login - `firebase login`
    3. Initialize firebase - `firebase init`, then select hosting
    4. Deploy command - `firebase deploy`         