from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api import health  # Ye file hum abhi banayenge

app = FastAPI(title="Plan AI - Intelligence Node")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Route registration
app.include_router(health.router)