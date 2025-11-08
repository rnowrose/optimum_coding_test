import traceback
from app import data
from app.data.tmdb_api.movies import fetch_trending_tmdb_data, fetch_movie_details, fetch_movie_images
from app.data.config import from_csv, to_csv
from app.models import Users, Movies
from app.models.production_companies import ProductionCompany
from app.utils.exceptions import MovieNotFoundException
from app.utils.parse import parse_string_to_list

def get_trending_movies():
    data = fetch_trending_tmdb_data()
    return data

def get_movie_images(movie_id: int):
    return fetch_movie_images(movie_id)

def get_movie_details(movie_id: int) -> Movies:
    try:
        movies_df = from_csv("movies.csv")
        movie_data = [movie for movie in movies_df if int(movie.get("id")) == movie_id]
        print(movie_data)
        if movie_data:
            pc_df = from_csv("production_companies.csv")
            production_company_data = [pc for pc in pc_df if pc.get("movie_id") == movie_id]
            movie_dict = movie_data[0].copy()
            movie_dict['genre'] = parse_string_to_list(movie_dict.get('genre'))
            movie_dict['production_countries'] = parse_string_to_list(movie_dict.get('production_countries'))

            movie_dict['production_companies'] = [
                ProductionCompany(**pc) for pc in production_company_data
            ]
            
            return Movies(**movie_dict)        
        data = fetch_movie_details(movie_id)
        to_csv([data.model_dump(exclude={'production_companies'})], "movies.csv")
        
        pc_data = []
        for prod in data.production_companies:
            pc_dict = prod.model_dump()
            pc_dict['movie_id'] = movie_id
            pc_data.append(pc_dict)

        to_csv(pc_data, "production_companies.csv")
        return data
    except Exception as e:
        raise MovieNotFoundException(f"Movie with ID {movie_id} not found.")

def add_favorites(movie_id: int, user_id: int):
    df = to_csv([{"user_id": user_id, "movie_id": movie_id}], "favorites.csv")
    return df

def user_details(user_id: int) -> Users:
    users = from_csv("users.csv")
    favorites = from_csv("favorites.csv")
    user = users[users["id"] == user_id]
    user_favorite = favorites[favorites["user_id"] == user_id]
    for movie in user_favorite["movie_id"]:
        movie_details = get_movie_details(movie)
        user["favorites"].append(movie_details)
    return user
    
