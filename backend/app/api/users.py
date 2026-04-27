"""Users API Routes"""

from fastapi import APIRouter
from pydantic import BaseModel, EmailStr

router = APIRouter()


class UserSchema(BaseModel):
    """User Schema"""
    id: int
    email: EmailStr
    full_name: str
    role: str
    is_active: bool

    class Config:
        from_attributes = True


class UserCreateSchema(BaseModel):
    """User Create Schema"""
    email: EmailStr
    full_name: str
    password: str


@router.post("/register", response_model=UserSchema)
async def register_user(user: UserCreateSchema):
    """Register a new user"""
    # TODO: Implement user registration
    return {}


@router.post("/login")
async def login_user(email: str, password: str):
    """Login user"""
    # TODO: Implement login logic
    return {"access_token": "", "token_type": "bearer"}


@router.get("/profile", response_model=UserSchema)
async def get_profile():
    """Get user profile"""
    # TODO: Implement get profile
    return {}
