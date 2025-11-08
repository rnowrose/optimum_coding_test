from datetime import datetime
from typing import Optional
from pydantic import BaseModel, Field

class Users(BaseModel):
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
    