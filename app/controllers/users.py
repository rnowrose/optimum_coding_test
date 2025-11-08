from typing import List

from pydantic import BaseModel
from app.services.users import create_user, login, logout, user_details
from fastapi import APIRouter

router = APIRouter(prefix="/api/users", tags=["users"])

class UserLogin(BaseModel):
    username: str
    password: str
    
class CreateNewUser(BaseModel):
    first_name: str
    last_name: str
    email: str
    username: str
    password: str

@router.post("/login")
def login(user: UserLogin):
    data  = login(user.username, user.password)
    if data["success"]:
        return {
            "success": True,
            "user_id": data['user_id'],
            "token": data['token'],
            "message": "Login successful"
        }
    return {"message": "Invalid credentials"}, 401

@router.get("/logout/{user_id}")
def logout(user_id: int):
    if logout(user_id):
        return {"message": "Logout successful"}
    return {"message": "User not found"}, 404

@router.post("/register")
def create_new_user(user: CreateNewUser):
    new_user = create_user(user)
    return {**new_user, "message": "User created successfully"}

@router.get("/{user_id}")
def get_user_details(user_id: int):
    user = user_details(user_id)
    return user