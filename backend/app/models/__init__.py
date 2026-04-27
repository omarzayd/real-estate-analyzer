"""Database Models"""

from app.models.base import Base
from app.models.user import User
from app.models.property import Property
from app.models.analytics import Analytics
from app.models.prediction import Prediction

__all__ = [
    "Base",
    "User",
    "Property",
    "Analytics",
    "Prediction",
]
