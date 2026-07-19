# AI-Powered Project Management Platform

This is a production-ready, enterprise-scale AI Project Management Platform. The system utilizes a modern layered monorepo architecture, splitting responsibilities cleanly between the frontend application, core backend processing engine, and predictive AI model orchestration pipelines.

## 🏗️ System Architecture Overview

The platform uses a 100% disconnected, fully nested structure where each engine operates within its own stack domain:
1. **Frontend Canvas Layer**: Built with Next.js 15, optimized for fast Server-Side Rendering (SSR) and seamless grid interactions.
2. **Backend Relational Core**: Built with NestJS/Node.js, handling main relational database integrity and live synchronization via WebSockets.
3. **AI Intelligence Engine**: Driven by Python FastAPI and LangChain, managing heavy background calculations and predictive deadline risk indices.

---

## 📂 Project Directory Structure

```text
ai-project-management/
├── docs/                 # System architecture specifications and Mermaid blueprints
│   └── architecture.md   # Offline visual infrastructure documentation
├── frontend/             # Next.js client-side application layer (Formerly plan-ai)
│   ├── public/           # Static asset assets (logos, images, global icons)
│   └── src/              # Main source directory using explicit src/ architecture
│       ├── app/          # Next.js App Router (pages, global middleware, layouts)
│       ├── components/   # Modular UI blocks categorized by canvas domain
│       │   ├── ui/       # shadcn/ui primitives (Button, Dialog, Badge components)
│       │   ├── layout/   # Core structural layouts (Sidebar.tsx, Header.tsx)
│       │   └── dashboard/# High-fidelity canvas views (TaskBoard.tsx, MetricCard.tsx)
│       ├── store/        # Zustand state trees for lightning-fast workspace management
│       ├── styles/       # Core styling properties and Tailwind configuration bridges
│       └── types/        # Strict TypeScript type interfaces for safe object data compilation
│   ├── tailwind.config.ts# High-tech Figma design tokens and semantic theme configuration
│   └── package.json      # Frontend micro-dependencies manifest
├── backend-core/         # NestJS enterprise relational business server
│   ├── src/              # Core source logic split by isolated domain modules
│   └── prisma/           # Database object models, relation maps, and schemas
└── ai-engine/            # Python FastAPI intelligence service layer
    ├── app/              # LangChain predictive pipelines and background processes
    └── requirements.txt  # Python micro-dependencies management manifest
```

---

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

## 🛡️ Getting Started & Standards

1. Ensure all system components are written in strict **TypeScript** (Frontend/Backend) and formatted properly.
2. Maintain strict **4px/8px alignment scale** variables inside Figma components to map neatly into Tailwind layouts.
3. Do not run heavy model algorithms directly inside the frontend thread; pipeline them safely through the API Gateway layer.

## 🗃️ Data Lifecycle & TypeScript Contracts

The frontend enforcement layer utilizes unified, strict TypeScript interfaces located at `src/types/index.ts`. Any backend transaction payload or AI system event string must match these types to guarantee data validation continuity.

* **Task Engine**: Managed via explicit enum states (`TaskStatus`, `TaskPriority`).
* **AI Layer Predictive Objects**: Features integrated safety metrics including `confidenceScore` and real-time risk tiers.
