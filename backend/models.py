import uuid
from typing import Optional
from pydantic import BaseModel, Field

class Person(BaseModel):
    id: str = Field(default_factory=uuid.uuid4, alias="_id")
    x:float=Field(...)
    y:float=Field(...)

    class Config:
        allow_population_by_field_name = True
        orm_mode=True
        schema_extra = {
            "example": {
                "_id": "066de609-b04a-4b30-b46c-32537c7f1f6e",
                "x":0.0,
                "y":0.0
            }
        }
