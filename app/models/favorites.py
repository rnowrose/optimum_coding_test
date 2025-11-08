from typing import Optional
from pydantic import BaseModel

from app.models.base_model import BaseSchema


class Favorites(BaseSchema):
    id: Optional[str] = None
    user_id: int
    movie_id: int
    