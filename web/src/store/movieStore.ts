import { create } from 'zustand'
import type { Movies } from '../domain/Movies'

type MovieState = {
    favoriteMovies: boolean
}

const useMovieStore = create<MovieState>()((set) => ({
    favoriteMovies: false,
}));

export default useMovieStore;