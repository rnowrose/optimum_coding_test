from http.client import HTTPException
from typing import List

from pydantic import BaseModel
from app.models.base_model import BaseSchema
from app.models.favorites import Favorites
from app.models.users import Users
from app.services.movies import add_favorites, is_user_logged_in
from app.services.users import create_user, login, logout, user_details
from fastapi import APIRouter

router = APIRouter(prefix="/api/users", tags=["users"])

class UserLogin(BaseModel):
    username: str
    password: str
    
class CreateNewUser(BaseSchema):
    first_name: str
    last_name: str
    email: str
    username: str
    password: str

@router.post("/login")
def login_api(user: UserLogin):
    data  = login(user.username, user.password)
    if data["success"]:
        return {
            "success": True,
            "user_id": data['user_id'],
            "token": data['token'],
            "message": "Login successful"
        }
    return {"message": "Invalid credentials", "success": False}, 401

@router.post("/logout/{user_id}")
def logout_api(user_id: str):
    if logout(user_id):
        return {"message": "Logout successful"}
    return {"message": "User not found"}, 404

@router.post("/register")
def create_new_user(user: CreateNewUser):
    user_model = Users(
        first_name=user.first_name,
        last_name=user.last_name,
        email=user.email,
        username=user.username,
        password=user.password,
        is_active=True
    )
    new_user = create_user(user_model)
    return {**new_user.model_dump(), "message": "User created successfully"}

@router.get("/{user_id}")
def get_user_details(user_id: str):
    if not is_user_logged_in(user_id):
        raise HTTPException(status_code=401, detail="Please login to view user details")

    user = user_details(user_id)
    return user

@router.post("/{user_id}/favorites")
def add_to_favorite(favorites: Favorites):
    if not is_user_logged_in(favorites.user_id):
        raise HTTPException(status_code=401, detail="Please login to add favorites")
    
    result = add_favorites(favorites)
    if result == "success":
        return {"message": "Movie added to favorites"}
    return {"message": "Failed to add movie to favorites"}, 400