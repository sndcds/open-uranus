from typing import Annotated

from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

from app.api.v1.endpoints import user, user_role, venue, organizer, event, space, space_type, venue_type, event_type, genre_type


app = FastAPI(
    docs_url='/docs',
    redoc_url=None,
    title='Veranstaltungen finden',
    summary='Diese Anwendung befindet sich noch in Entwicklung, bitte nutze diese API mit diesem Wissen.',
    version='0.2.1'
)

app.mount('/static', StaticFiles(directory='static'), name='static')


app.include_router(user.router, prefix='/user', tags=['User'])
app.include_router(user_role.router, prefix='/user/role', tags=['User roles'])
app.include_router(venue.router, prefix='/venue', tags=['Venue'])
app.include_router(venue_type.router, prefix='/venue/type', tags=['Venue'])
app.include_router(organizer.router, prefix='/organizer', tags=['Organizer'])
app.include_router(event.router, prefix='/event', tags=['Events'])
app.include_router(event_type.router, prefix='/event/type', tags=['Event'])
app.include_router(space.router, prefix='/space', tags=['Venue Space'])
app.include_router(space_type.router, prefix='/space/type', tags=['Venue Space'])
app.include_router(genre_type.router, prefix='/genre/type', tags=['Genre'])
