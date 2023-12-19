import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        gptMovies: null,
        movieResult: null,
        movieNames: null,
        selectedMovie: null,
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult: (state, action) => {
            const { movieNames, movieResult } =action.payload;
            state.movieNames = movieNames;
            state.movieResult = movieResult;
        },
        resetMovieList: (state) => {
            state.movieNames = null;
            state.movieResult = null;
        }, 
    },
});

export const {toggleGptSearchView, addGptMovieResult, resetMovieList} = gptSlice.actions;

export default gptSlice.reducer;