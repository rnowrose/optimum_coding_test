from datetime import datetime
from typing import List, Optional
from pydantic import BaseModel

from app.models.production_companies import ProductionCompany


class Movies(BaseModel):
    id: int
    title: str
    year: int
    genre: List[str]
    budget: Optional[float] = None
    popularity: Optional[float] = None
    poster_path: Optional[str] = None
    production_companies: Optional[List[ProductionCompany]] = None
    release_date: datetime
    revenue: int
    runtime: int
    tagline: str
    production_countries: List[str]
    overview: str
    
    
    
    