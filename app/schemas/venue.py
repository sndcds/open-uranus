from pydantic import BaseModel
from typing import Optional, List, Literal
from datetime import date

from app.models.venue import VenueBase



class VenueCreate(BaseModel):
    venue_name: str
    venue_street: Optional[str] = None
    venue_house_number: Optional[str] = None
    venue_postal_code: Optional[str] = None
    venue_city: Optional[str] = None
    venue_opened_at: Optional[date] = None
    venue_latitude: float
    venue_longitude: float
    organizer_name: Optional[str] = None
    organizer_url: Optional[str] = None
    venue_organizer_id: int



class VenueRead(VenueBase):
    id: int
