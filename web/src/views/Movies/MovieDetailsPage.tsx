import { useEffect, useState } from "react";
import type { Movies } from "../../domain/Movies";
import { useParams } from "react-router"
import { getMovieDetails } from "../../api/movie.api";
import MovieDetailsInfo from "../../components/Movies/MovieDetailsInfo";
import Box from "@mui/material/Box";

const IMAGE_URL = import.meta.env.VITE_IMAGE_URL;


export default function MovieDetailsPage() {
    const [movie, setMovie] = useState<Movies>();
    const [loading, setLoading] = useState<boolean>(true);
    const { movieId } = useParams<{ movieId: string }>();

    useEffect(() => {
        getMovieDetails(Number(movieId))
            .then((data) => {
                setMovie(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching movie details:', error);
            });
    }, [movieId]);
    return (
        <Box data-cy="movie-details">
            <h1>Movie Details</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                movie && (
                    <MovieDetailsInfo
                        posterPath={`${IMAGE_URL}${movie.posterPath}`}
                        title={movie.title}
                        overview={movie.overview}
                        releaseDate={movie.releaseDate}
                        productionCompanies={movie.productionCompanies}
                        genre={movie.genre}
                        tagline={movie.tagline}
                        budget={movie.budget}
                        revenue={movie.revenue}
                        runtime={movie.runtime}
                    />
                )
            )}
        </Box>
    );
}
