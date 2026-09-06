# AI-Powered Project Management Platform

This is a production-ready, enterprise-scale AI Project Management Platform. The system utilizes a modern layered monorepo architecture, splitting responsibilities cleanly between the frontend application, core backend processing engine, and predictive AI model orchestration pipelines.

## 🏗️ System Architecture Overview

The platform uses a 100% disconnected, fully nested structure where each engine operates within its own stack domain:
1. **Frontend Canvas Layer**: Built with Next.js 15, optimized for fast Server-Side Rendering (SSR) and seamless grid interactions.
2. **Backend Relational Core**: Built with NestJS/Node.js, handling main relational database integrity and live synchronization via WebSockets.
3. **AI Intelligence Engine**: Driven by Python FastAPI and LangChain, managing heavy background calculations and predictive deadline risk indices.

---

## 📂 Project Directory Structure
```

ai-project-management/
├── docs/                 # System architecture specifications and Mermaid blueprints
│   └── architecture.md   # Offline visual infrastructure documentation
├── frontend/             # Next.js client-side application layer (Formerly plan-ai)
│   ├── public/           # Static asset assets (logos, images, global icons)
│   ├── src/              # Main source directory using explicit src/ architecture
│   │   ├── app/          # Next.js App Router (pages, global middleware, layouts)
│   │   │   ├── api/      # Backend integration endpoints
│   │   │   ├── dashboard/# User dashboard views and analytical data
│   │   │   └── login/    # User authentication and entry portal
│   │   ├── components/   # Modular UI blocks categorized by canvas domain
│   │   │   ├── Home/     # Public landing pages and generic views
│   │   │   ├── ui/       # shadcn/ui primitives (Button, Dialog, Badge components)
│   │   │   ├── layout/   # Core structural layouts (Sidebar.tsx, Header.tsx)
│   │   │   └── dashboard/# High-fidelity canvas views (TaskBoard.tsx, MetricCard.tsx)
│   │   ├── lib/          # Shared utility hooks, functions, and API clients
│   │   ├── store/        # Zustand state trees for lightning-fast workspace management
│   │   ├── Svg/          # Raw SVG asset components and icons
│   │   ├── styles/       # Core styling properties and Tailwind configuration bridges
│   │   └── types/        # Strict TypeScript type interfaces for safe object data compilation
│   ├── tailwind.config.ts# High-tech Figma design tokens and semantic theme configuration
│   └── package.json      # Frontend micro-dependencies manifest
├── backend-core/         # NestJS enterprise relational business server
│   ├── src/              # Core source logic split by isolated domain modules
│   │   └── module/       # Domain-driven feature modules
│   │       ├── prisma/   # Prisma service and database module connection
│   │       └── project/  # Project management services and business logic
│   │           └── dto/  # Data Transfer Objects for validation and payload structural rules
│   └── prisma/           # Database object models, relation maps, and schemas
│       └── migration/    # SQL migration history files
└── ai-engine/            # Python-based processing unit for smart features
    ├── app/              # Application logic
    │   ├── api/          # API Endpoints (FastAPI Routers)
    │   ├── core/         # Configuration & Shared Logic
    │   └── worker/       # Celery background tasks
    ├── task/             # Shared Task schemas
    ├── main.py           # Engine Entry point
    └── requirements.txt  # Python package dependencies

```


## ⚙️ Micro-Stack Components Breakdown

### 1. Frontend Client Specification (`/frontend`)
* **Framework Core**: Next.js 15 (App Router with standard `/src` wrapper structure)
* **Styling Paradigm**: Tailwind CSS v4 featuring utility-first spacing variables
* **Component Primitives**: shadcn/ui utilizing accessible Radix primitives
* **Global Store Engine**: Zustand for ultra-low latency canvas updates

### 2. Core Relational Engine (`/backend-core`)
* **Core Runtime**: NestJS / TypeScript
* **Database Bridge**: Prisma Object Relational Mapping (ORM)
* **Live System Bridge**: Socket.io / WebSockets for cross-client real-time synchronization

### 3. Predictive Intelligence Node (`/ai-engine`)
* **Runtime Core**: Python FastAPI
* **Orchestration**: LangChain Core coupled with OpenAI / Anthropic models
* **Async Workers**: Celery + Redis Task Queues for heavy calculations

---

## 🗃️ Data Lifecycle & TypeScript Contracts

The frontend enforcement layer utilizes unified, strict TypeScript interfaces located at `src/types/index.ts`. Any backend transaction payload or AI system event string must match these types to guarantee data validation continuity.


## 🏗️ System Architecture
This project utilizes a distributed microservices approach:

- **Client Canvas (Frontend):** Next.js 16.0.2, Tailwind v4. (Port: 3000)
- **Relational Core (Backend):** NestJS, Prisma. (Port: 4000)
- **Intelligence Node (AI Engine):** Python, FastAPI. (Port: 8000)

## 🚦 Infrastructure Status
- [x] **Frontend:** Connected
- [x] **Core Node:** Operational
- [x] **AI Node:** Operational

## ⚙️ Boot Sequence
1. Start Core Node (`npm run start:dev` in /backend-core)
2. Start AI Node (`uvicorn main:app --reload --port 8000` in /ai-engine)
3. Start Client Canvas (`npm run dev` in /frontend)
