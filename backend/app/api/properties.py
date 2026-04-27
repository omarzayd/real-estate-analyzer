"""Properties API Routes"""

from fastapi import APIRouter, HTTPException, Query
from typing import List
from pydantic import BaseModel

router = APIRouter()


class PropertySchema(BaseModel):
    """Property Schema"""
    id: int
    title: str
    description: str
    price: float
    area: float
    location: str
    property_type: str
    bedrooms: int
    bathrooms: int
    
    class Config:
        from_attributes = True


@router.get("/", response_model=List[PropertySchema])
async def get_properties(
    skip: int = Query(0, ge=0),
    limit: int = Query(10, ge=1, le=100),
):
    """Get all properties with pagination"""
    # TODO: Implement database query
    return []


@router.get("/{property_id}", response_model=PropertySchema)
async def get_property(property_id: int):
    """Get a specific property by ID"""
    # TODO: Implement database query
    raise HTTPException(status_code=404, detail="Property not found")


@router.post("/", response_model=PropertySchema)
async def create_property(property: PropertySchema):
    """Create a new property"""
    # TODO: Implement database creation
    return property


@router.put("/{property_id}", response_model=PropertySchema)
async def update_property(property_id: int, property: PropertySchema):
    """Update a property"""
    # TODO: Implement database update
    return property


@router.delete("/{property_id}")
async def delete_property(property_id: int):
    """Delete a property"""
    # TODO: Implement database deletion
    return {"message": "Property deleted successfully"}
