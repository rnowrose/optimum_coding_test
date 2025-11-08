from typing import List
from fastapi import APIRouter
from app.services.movies import get_movie_images, get_trending_movies, get_movie_details

router = APIRouter(prefix="/api/movies", tags=["movies"])

@router.get("/trending-movies")
async def trending_movies():
    movies = get_trending_movies()
    return movies

@router.get("/{movie_id}")
async def movie_details(movie_id: int):
    movie = get_movie_details(movie_id)
    return movie

@router.get("/images/{movie_id}")
async def movie_images(movie_id: int):
    images = get_movie_images(movie_id)
    return images