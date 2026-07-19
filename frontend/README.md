# Plan AI - Frontend Client Canvas

This is the high-fidelity, pixel-perfect frontend application layer for the AI-Powered Project Management Platform, initialized with **Next.js 16 (App Router)** and **Tailwind CSS v4**.

## ⚙️ Micro-Stack Architecture
* **Framework Core**: Next.js 16.0.2 (React 19.2 Platform Alignment)
* **Styling Paradigm**: Tailwind CSS v4 (CSS-First System Design Tokens)
* **Icons Package**: `react-icons` (FontAwesome 6 Brands + HeroIcons v2 Outlines)
* **State Engine**: Zustand (Ultra-low latency reactive variables)

---

## 🛠️ TypeScript Compiler Configuration (Fixing Missing Session ID)

When mapping security parameters inside NextAuth callbacks, TypeScript requires explicit module augmentation to recognize custom values like `session.user.id`.

### 1. Augmentation Strategy Blueprint (`src/types/next-auth.d.ts`)
We extend the global namespace explicitly to ensure robust static compilation check-ups:
```typescript
import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    sub?: string;
  }
}
```

### 2. Mandatory Compiler Scope Settings (`tsconfig.json`)
To make sure the type checker recognizes ambient definitions, verify that your `"include"` arrays actively reference the types directory path:
```json
"include": [
  "next-env.d.ts",
  "**/*.ts",
  "**/*.tsx",
  ".next/types/**/*.ts",
  "src/types/**/*.d.ts"
]
```


