from typing import List, Optional
from pydantic import BaseModel

class ImageInfo(BaseModel):
    file_path: str
    width: int
    height: int
    iso_639_1: Optional[str] = None
    aspect_ratio: float
    vote_average: float
    vote_count: int

class MovieImages(BaseModel):
    id: int
    backdrops: List[ImageInfo]
    posters: List[ImageInfo]
    