import type { MovieImages, Movies, TrendingMovies } from "../domain/Movies";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

function getTrendingMovies(): Promise<TrendingMovies[]> {
    return fetch(`${API_BASE_URL}/api/movies/trending-movies`)
        .then((response) => {
            return response.json();
        })
}

function getMovieDetails(movieId: number): Promise<Movies> {
    return fetch(`${API_BASE_URL}/api/movies/${movieId}`)
        .then((response) => {
            return response.json();
        })
}

function getMovieImages(movieId: number): Promise<MovieImages> {
    return fetch(`${API_BASE_URL}/api/movies/images/${movieId}`)
        .then((response) => {
            return response.json();
        })
}

export {
    getTrendingMovies,
    getMovieDetails,
    getMovieImages,
};
