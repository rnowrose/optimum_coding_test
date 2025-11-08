from typing import Optional
from pydantic import BaseModel


class Favorites(BaseModel):
    id: Optional[str] = None
    user_id: int
    movie_id: int
    