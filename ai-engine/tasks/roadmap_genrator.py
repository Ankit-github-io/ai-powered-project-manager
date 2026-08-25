import os
from typing import List, Dict, Any
from celery import Celery  # type: ignore[import-untyped]
from pydantic import BaseModel, Field

# Resolve Redis broker environment or fallback to local
CELERY_BROKER_URL: str = os.getenv("REDIS_URL", "redis://localhost:6379/0")

celery_app = Celery("ai_tasks", broker=CELERY_BROKER_URL, backend=CELERY_BROKER_URL)


class GeneratedTask(BaseModel):
    title: str
    priority: str = Field(default="MEDIUM", description="HIGH, MEDIUM, or LOW")
    status: str = Field(default="TODO", description="Kanban initial column state")


class RoadmapResponse(BaseModel):
    project_id: str
    status: str
    tasks: List[GeneratedTask]


@celery_app.task(name="generate_sprint_roadmap")  # type: ignore[misc]
def generate_sprint_roadmap(project_id: str, prompt: str) -> Dict[str, Any]:
    """
    Asynchronous Celery Worker executing non-blocking AI roadmap generation logic.
    Calculates initial task breakdown without blocking the primary FastAPI/NestJS loop.
    """
    raw_generated_tasks = [
        GeneratedTask(
            title=f"Setup architecture & schemas for: {prompt}",
            priority="HIGH",
            status="TODO",
        ),
        GeneratedTask(
            title=f"Implement CRUD endpoints for: {prompt}",
            priority="MEDIUM",
            status="TODO",
        ),
        GeneratedTask(
            title=f"Write automated test suite for: {prompt}",
            priority="LOW",
            status="TODO",
        ),
    ]

    response = RoadmapResponse(
        project_id=project_id,
        status="COMPLETED",
        tasks=raw_generated_tasks,
    )

    # Convert Pydantic v2 model safely to standard Python Dictionary
    return dict(response.model_dump())