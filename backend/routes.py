from fastapi import APIRouter, Body, Request, Response, HTTPException, status
from fastapi.encoders import jsonable_encoder
from typing import List

from models import Person

router = APIRouter()

@router.post("/", response_description="Update person", status_code=status.HTTP_201_CREATED, response_model=Person)
def update_person(request: Request, person: Person = Body(...)):
    person = jsonable_encoder(person)
    new_person = request.app.database["persons"].insert_one(person)
    created_person = request.app.database["persons"].find_one(
        {"_id": new_person.inserted_id}
    )

    return created_person

@router.get("/{id}", response_description="Get a single person by id", response_model=Person)
def find_person(id: str, request: Request):
    if (person := request.app.database["persons"].find_one({"_id": id})) is not None:
        return person
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"person with ID {id} not found")

@router.get("/", response_description="List all persons", response_model=List[Person])
def list_persons(request: Request):
    persons = list(request.app.database["persons"].find(limit=100))
    return persons