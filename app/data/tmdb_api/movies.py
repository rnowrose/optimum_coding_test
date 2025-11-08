from typing import List
import requests
from datetime import datetime
from app.data.config import tmdb_base_url, headers
from app.models.movies import Movies, TrendingMovies
from app.models.production_companies import ProductionCompany
from app.models.movie_images import MovieImages


def fetch_trending_tmdb_data() -> List[TrendingMovies]:
    url = f"{tmdb_base_url}/3/trending/movie/day?language=en-US"
    response = requests.get(url, headers=headers)
    trending_movies = response.json()
    data = []
    for movie in trending_movies.get("results", []):
        data.append(TrendingMovies(
            id=int(movie.get("id")),
            title=movie.get("title", ""),
            year=datetime.strptime(movie.get("release_date", ""), "%Y-%m-%d").year if movie.get("release_date") else 0,
            poster_path=movie.get("poster_path")
        ))
    return data

def fetch_movie_images(movie_id: int) -> MovieImages:
    url = f"{tmdb_base_url}/3/movie/{movie_id}/images"
    response = requests.get(url, headers=headers)
    return response.json()

def fetch_movie_details(movie_id: int) -> Movies:
    url = f"{tmdb_base_url}/3/movie/{movie_id}"
    response = requests.get(url, headers=headers)
    return parse_movie_data(response.json())

def parse_movie_data(data: dict) -> Movies:
    try:
        return Movies(
            id=int(data.get("id")),
            title=data.get("title", ""),
            year=datetime.strptime(data.get("release_date", ""), "%Y-%m-%d").year if data.get("release_date") else 0,
            genre=[genre["name"] for genre in data.get("genres", [])],
            budget=int(data.get("budget", 0)),
            popularity=float(data.get("popularity", 0)),
            poster_path=data.get("poster_path"),
            production_companies=parse_production_companies(data.get("production_companies", []), int(data.get("id"))),
            release_date=datetime.strptime(data.get("release_date"), "%Y-%m-%d") if data.get("release_date") else 0,
            revenue=int(data.get("revenue", 0)),
            runtime=int(data.get("runtime", 0)),
            tagline=data.get("tagline", ""),
            production_countries=[country["name"] for country in data.get("production_countries", [])],
            overview=data.get("overview", ""),
        )
    except Exception as e:
        print(e)
        raise ValueError("Error parsing movie data") from e

def parse_production_companies(data: list[dict], movie_id: int) -> list[ProductionCompany]:
    companies = []
    for company in data:
        companies.append(
            ProductionCompany(
                id=int(company.get("id")),
                name=company.get("name"),
                logo=company.get("logo_path", ""),
                origin_country=company.get("origin_country"),
                movie_id=movie_id
            )
        )
    return companies