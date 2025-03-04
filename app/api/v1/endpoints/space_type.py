from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from app.db.session import get_db
from app.schemas.space_type_response import SpaceTypeResponse
from app.db.repository.space_type import get_all_space_types
from typing import List, Optional



router = APIRouter()

@router.get('/', response_model=List[SpaceTypeResponse])
async def fetch_all_space_types(
    db: AsyncSession = Depends(get_db)
):
    space_types = await get_all_space_types(db)

    return space_types
