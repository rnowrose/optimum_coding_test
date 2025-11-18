import secrets
import bcrypt
from app.data.config import to_csv, from_csv
from app.models.users import Users
from app.services.movies import get_movie_details
from app.utils.parse import generate_generic_id

def create_user(user_data: Users) -> Users:
    user_data.id = generate_generic_id()
    salt = bcrypt.gensalt()
    hashed_password = bcrypt.hashpw(user_data.password.encode("utf-8"), salt)
    user_data.password = hashed_password.decode("utf-8")
    to_csv([user_data.model_dump()], "users.csv")
    return user_data

def login(username: str, password: str) -> dict:
    users = from_csv("users.csv")
    for user in users:
        if user['username'] == username:
            stored_password = user['password'].encode('utf-8')
            input_password = password.encode('utf-8')
            if bcrypt.checkpw(input_password, stored_password):
                user['token'] = secrets.token_urlsafe(32)
                to_csv([user], "users.csv")
                return {
                    "success": True,
                    "user_id": user['id'],
                    "full_name": f"{user['first_name']} {user['last_name']}",
                    "token": user['token'],
                    "message": "Login successful"
                }
    return {"success": False, "message": "Invalid credentials"}

def logout(user_id: str) -> bool:
    users = from_csv("users.csv")
    for user in users:
        if user['id'] == user_id:
            user['token'] = None
            to_csv([user], "users.csv")
            return True
    return False
    

def user_details(user_id: str) -> Users:
    users = from_csv("users.csv")
    favorites = from_csv("favorites.csv")
    user = users[users["id"] == user_id]
    user_favorite = favorites[favorites["user_id"] == user_id]
    for movie in user_favorite["movie_id"]:
        movie_details = get_movie_details(movie)
        user["favorites"].append(movie_details)
    return user
    