from datetime import datetime
from typing import Optional
from pydantic import BaseModel, Field

from app.models.base_model import BaseSchema

class Users(BaseSchema):
    id: Optional[str] = None
    first_name: str
    last_name: str
    email: str 
    username: str
    password: str
    is_active: bool = True
    created_at: datetime = Field(default_factory=datetime.now)
    updated_at: datetime = Field(default_factory=datetime.now)
    token: Optional[str] = None
    