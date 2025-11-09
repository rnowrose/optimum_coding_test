import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../api/movie.api";
import type { TrendingMovies } from "../../domain/Movies";
import Box from "@mui/material/Box";
import { useNavigate } from 'react-router';
import MovieThumbNail from "../../components/Movies/MovieThumbNail";
import CircularProgress from '@mui/material/CircularProgress';

const IMAGE_URL = import.meta.env.VITE_IMAGE_URL;


function CircularIndeterminate() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
}

export default function MovieTrendsPage() {
    const [trendingMovies, setTrendingMovies] = useState<TrendingMovies[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const navigate = useNavigate();
    
    useEffect(() => {
        getTrendingMovies()
            .then((data) => {
                setTrendingMovies(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching movies:', error);
            });
    }, []);

    const handleMovieClick = (movieId: number) => {
        navigate(`/details/${movieId}`);
    };

    return (
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 3, padding: 2 }}>
            {loading ? (
                <CircularIndeterminate />
            ) : (
                trendingMovies.map((movie) => (
                    <div 
                        key={movie.id}
                        onClick={() => handleMovieClick(movie.id)}
                        style={{ cursor: 'pointer'}}
                        data-cy="trend-movie"
                    >
                        <MovieThumbNail
                            title={movie.title}
                            year={movie.year.toString()}
                            image={`${IMAGE_URL}${movie.posterPath}`}
                        />
                    </div>
                ))
            )}
        </Box>
    )

}