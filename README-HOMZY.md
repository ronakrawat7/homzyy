# Homzy — source code

## What is inside
- backend/  → FastAPI + MongoDB (booking log API)
- frontend/ → React landing page (WhatsApp booking)

## Setup
1. Backend: pip install -r backend/requirements.txt, then run server.py (uvicorn). Backend reads MONGO_URL and DB_NAME from backend/.env.
2. Frontend: yarn install, then yarn start. Frontend reads these from frontend/.env:
   - REACT_APP_BACKEND_URL  → your backend URL (e.g. https://your-api)
   - REACT_APP_WHATSAPP_NUMBER → your WhatsApp number with country code, no + (currently 917486875335)
   (The .env file is not included in the zip for safety — create it with the two lines above.)
3. WhatsApp booking: every button opens wa.me with a pre-filled booking message.
