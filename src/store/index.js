import { configureStore } from "@reduxjs/toolkit";
import { songsReducer } from "./slices/songsSlice";
import { moviesReducer } from "./slices/moviesSlice";
import { addSong, removeSong } from "./slices/songsSlice";
import { addMovie, removeMovie } from "./slices/moviesSlice";
import { reset } from "./actions";

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer,
  },
});

export { store, reset, addSong, removeSong, addMovie, removeMovie };
