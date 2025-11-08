import type { MovieImages, Movies } from "../domain/Movies";

function getTrendingMovies(): Promise<Movies> {
    return fetch("/api/movies/trending-movies")
        .then((response) => {
            return response.json();
        })
}

function getMovieDetails(movieId: number): Promise<Movies> {
    return fetch(`/api/movies/movie-details/${movieId}`)
        .then((response) => {
            return response.json();
        })
}

function getMovieImages(movieId: number): Promise<MovieImages> {
    return fetch(`/api/movies/movie-images/${movieId}`)
        .then((response) => {
            return response.json();
        })
}

export {
    getTrendingMovies,
    getMovieDetails,
    getMovieImages,
};
