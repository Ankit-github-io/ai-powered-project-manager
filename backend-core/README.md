# 🚀 AI-Powered Project Management SaaS - Backend Core

This is the enterprise-grade backend core engine for the AI-Powered Project Management platform, built using **NestJS**, **Prisma ORM**, and **PostgreSQL**.

## 🛠️ Tech Stack

*   **Framework:** NestJS (TypeScript)
*   **Database ORM:** Prisma
*   **Database:** PostgreSQL
*   **Validation:** Class-validator & Class-transformer

## 📂 Directory Structure (Core)

```text
├── backend-core/         # NestJS enterprise relational business server
│   ├── src/              # Core source logic split by isolated domain modules
│   │   └── module/       # Domain-driven feature modules
│   │       ├── prisma/   # Prisma service and database module connection
│   │       └── project/  # Project management services and business logic
│   │           └── dto/  # Data Transfer Objects for validation and payload structural rules
│   └── prisma/           # Database object models, relation maps, and schemas
│       └── migration/    # SQL migration history files

```

