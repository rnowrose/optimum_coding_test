from app.services.movies import get_trending_movies, get_movie_details, add_favorites, user_details

class TestMovieService:
    def test_get_trending_movies(self):
        movies = get_trending_movies()
        print(movies)


