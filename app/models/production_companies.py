from pydantic import BaseModel


class ProductionCompany(BaseModel):
    id: int
    logo: str
    name: str
    origin_country: str
    movie_id: int