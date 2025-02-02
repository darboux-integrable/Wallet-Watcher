import bcrypt
from dotenv import load_dotenv
from bson import ObjectId
from typing import List, Optional
import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routers.users_router import user_router
app = FastAPI()

# The list of origins is all the URLs that can talk with the backend.
origins = [
    "http://localhost:3000"
]

# Stop CORS errors and allow frontend to talk with the backend.
app.add_middleware(
    CORSMiddleware,
    allow_origins="*",
    allow_credentials = True,
    allow_methods=["*"], # Allow all methods 
    allow_headers=["*"] # Allow all headers 
)

load_dotenv()

app.include_router(user_router)

@app.get("/")
def test():
    return "working"