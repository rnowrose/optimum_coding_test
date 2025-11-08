import requests
from datetime import datetime
from app.data.config import tmdb_base_url, headers
from app.models.movies import Movies
from app.models.production_companies import ProductionCompany
from app.models.movie_images import MovieImages

def fetch_trending_tmdb_data():
    url = f"{tmdb_base_url}/3/trending/all/day?language=en-US"
    response = requests.get(url, headers=headers)
    return response.json()

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
            id=data.get("id"),
            title=data.get("title", ""),
            year=datetime.strptime(data.get("release_date", ""), "%Y-%m-%d").year if data.get("release_date") else 0,
            genre=[genre["name"] for genre in data.get("genres", [])],
            budget=data.get("budget"),
            popularity=data.get("popularity"),
            poster_path=data.get("poster_path"),
            production_companies=parse_production_companies(data.get("production_companies", []), int(data.get("id"))),
            release_date=datetime.strptime(data.get("release_date"), "%Y-%m-%d") if data.get("release_date") else 0,
            revenue=data.get("revenue", 0),
            runtime=data.get("runtime", 0),
            tagline=data.get("tagline", ""),
            production_countries=[country["name"] for country in data.get("production_countries", [])],
            overview=data.get("overview", ""),
        )
    except Exception as e:
        raise ValueError("Error parsing movie data") from e

def parse_production_companies(data: list[dict], movie_id: int) -> list[ProductionCompany]:
    companies = []
    for company in data:
        companies.append(
            ProductionCompany(
                id=company["id"],
                name=company["name"],
                logo=company.get("logo_path"),
                origin_country=company.get("origin_country"),
                movie_id=movie_id
            )
        )
    return companies