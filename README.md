# Veranstaltungsorte Uranus

_Haftungsausschluss: Dieses Repository und die zugehörige Datenbank befinden sich derzeit in einer Beta-Version. Einige Aspekte des Codes und der Daten können noch Fehler enthalten. Bitte kontaktieren Sie uns per E-Mail oder erstellen Sie ein Issue auf GitHub, wenn Sie einen Fehler entdecken._

### Prerequisites

1. **Database Setup**

- Ensure PostgreSQL is installed and running on `localhost` (default port: `5432`).
- Create a database named `uranus`, owned by a user with the same name.
- Make sure the database accepts connections from `localhost`.

2. **Environment Variables**

- Create a `.env` file in the root directory of this repository and add the following environment variables with your specific values:

> You may use `openssl rand -hex 32` to generate your `SECRET_KEY` and `REFRESH_SECRET_KEY` keys.

```sh
MAIL_USERNAME=YOUR_EMAIL_USERNAME
MAIL_PASSWORD=YOUR_EMAIL_PASSWORD
MAIL_FROM=YOUR_EMAIL_ADDRESS
MAIL_PORT=YOUR_SMTP_PORT
MAIL_SERVER=YOUR_SMTP_SERVER
MAIL_STARTTLS=1
MAIL_SSL_TLS=0
FRONTEND_URL=YOUR_FRONTEND_URL
SECRET_KEY=YOUR_SECRET_KEY
REFRESH_TOKEN_EXPIRE_DAYS=DAYS
REFRESH_SECRET_KEY=YOUR_REFRESH_SECRET_KEY
UPLOAD_DIR=YOUR_UPLOADS_PATH
DATABASE_URL="postgresql+asyncpg://YOUR_DB_USER:YOUR_DB_PASS@YOUR_DB_HOST:YOUR_DB_PORT/YOUR_DB_NAME"
```

3. **Python**

- Python 3 installed with `venv` and `pip` available.

### Steps

1. Set up the database schema:

```sh
psql -U uranus -h localhost -d uranus -p 5432 < data/uranus-venue-schema.sql
psql -U uranus -h localhost -d uranus -p 5432 -c "CREATE EXTENSION IF NOT EXISTS pg_trgm"
psql -U uranus -h localhost -d uranus -p 5432 -c "CREATE INDEX IF NOT EXISTS venue_name_gin_idx ON uranus.venue USING gin (LOWER(name) gin_trgm_ops)"
```

2. Activate a Python virtual environment and install dependencies:

```sh
python3 -m venv venv
source venv/bin/activate
pip3 install -r requirements.txt
```

3. Run the API:

```sh
uvicorn app.main:app --reload --env-file .env
```

## Export Data

```sh
pg_dump -U oklab -h localhost -d oklab -n uranus --data-only --column-inserts --no-owner --no-comments --verbose -f uranus_data_dump.sql
pg_dump -U oklab -h localhost -d oklab -n uranus --schema-only --no-owner --no-comments --verbose -f uranus_schema_dump.sql
```
