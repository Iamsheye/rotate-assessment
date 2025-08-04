# Rotate Assessment Dashboard

A modern, responsive dashboard application built with Next.js, Chakra UI v3, and React Flow for visualizing risk assessment data and network flow diagrams.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm/yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Iamsheye/rotate-assessment.git
cd rotate-assessment
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📋 Available Scripts

- `pnpm dev` - Start development server with Turbo
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm preview` - Build and start production server
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint issues
- `pnpm typecheck` - Run TypeScript compiler check
- `pnpm format:write` - Format code with Prettier
- `pnpm format:check` - Check code formatting

## 🏗️ Tech Stack

### Core Framework

- **Next.js 15.1.3** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type safety and developer experience

### UI & Styling

- **Chakra UI v3** - Modern React component library
- **Panda CSS** - Build-time CSS-in-JS solution
- **Lucide React** - Beautiful icon library
- **React Icons** - Additional icon set

### Data Visualization

- **@xyflow/react** - Interactive flow diagrams and node-based UIs

### Development Tools

- **ESLint** - Code linting with Next.js config
- **Prettier** - Code formatting
- **@t3-oss/env-nextjs** - Type-safe environment variables

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/
│   ├── ui/             # Reusable UI components
│   ├── node-ui/        # Flow diagram components
│   └── *.tsx           # Feature components
├── assets/             # SVG icons and static assets
├── hooks/              # Custom React hooks
└── env.js             # Environment configuration
```

## 🔧 Configuration Files

- `next.config.js` - Next.js configuration
- `panda.config.ts` - Panda CSS configuration
- `postcss.config.cjs` - PostCSS configuration
- `tsconfig.json` - TypeScript configuration
- `.eslintrc.json` - ESLint configuration

