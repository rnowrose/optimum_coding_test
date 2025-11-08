from typing import Optional
from pydantic import BaseModel

from app.models.base_model import BaseSchema


class ProductionCompany(BaseSchema):
    id: int
    logo: Optional[str] = None
    name: str
    origin_country: str
    movie_id: int