import os
from typing import List, Optional

import bcrypt
from bson import ObjectId
from dotenv import load_dotenv
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from pymongo import MongoClient

load_dotenv()

cluster = MongoClient(os.getenv("DATABASE_URI"))

database = cluster["WalletWatcher"]

user_collection = database["users"]

user_router = APIRouter(
    prefix="/users",
    tags=["users"]
)

class User(BaseModel):
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    username: str
    email: str
    password: str

# Create a New User
@user_router.post("/")
def create_user(user_data: User):
    user_dict = user_data.model_dump()
    
    hashed_password = bcrypt.hashpw(user_dict["password"].encode("utf-8"), bcrypt.gensalt())
    
    user_dict["password"] = hashed_password
    
    possible_user = user_collection.find_one({"username": user_dict["username"]})
    
    if possible_user:
        raise HTTPException(status_code=406, detail="There already exist a user with that username")
    
    new_user = user_collection.insert_one(user_dict)
    
    user = user_collection.find_one({"_id": new_user.inserted_id})
    
    if not user:
        raise HTTPException(status_code=500, detail="Server Error, Could not create new user.")
    
    user["_id"] = str(user["_id"])
    return user

@user_router.get("/")
def get_user_by_username_and_password(username: str, password: str):
    
    user = user_collection.find_one({"username": username})
    
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    
    if bcrypt.checkpw(password.encode("utf-8"), user["password"]):
        user["_id"] = str(user["_id"])
        return user
    else:
        raise HTTPException(status_code=403, detail="Username and password do not match")
    

@user_router.get("/{user_id}")
def get_user_by_id(user_id: str):
    
    user = user_collection.find_one({"_id": ObjectId(user_id)})
    
    if not user:
        raise HTTPException(status_code=404, detail="404, User not Found")
    
    user["_id"] = str(user["_id"])
    return user

    