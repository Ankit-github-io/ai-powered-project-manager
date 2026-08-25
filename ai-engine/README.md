# 🧠 AI-Powered Project Management - AI Engine

Dedicated intelligence microservice for workflow insights, predictive task breakdown, and automated standup summaries.

## 🚀 Infrastructure Status
* **Status:** 🟢 Operational (Connected)
* **API Port:** 8000
* **Gateway:** FastAPI (ASGI)

## 🏗️ Technical Architecture
* **Language:** Python 3.x
* **Framework:** FastAPI
* **Server:** Uvicorn
* **Orchestration:** Integrated with Relational Core (NestJS)

## 📂 Project Structure
```text
ai-engine/
├── app/               # Application logic
│   ├── api/           # API Endpoints (FastAPI Routers)
│   ├── core/          # Configuration & Shared Logic
│   └── worker/        # Celery background tasks
├── task/              # Shared Task schemas
├── main.py            # Entry point
└── requirements.txt