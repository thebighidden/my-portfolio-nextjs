# Portfolio Website Application

## Overview

This is a full-stack web application featuring a personal portfolio website for Alex Johnson, a Full Stack Developer. The application is built with React on the frontend, Express.js on the backend, and uses PostgreSQL as the database. It showcases a modern, responsive design with dark/light theme support, showcasing projects, skills, and providing contact functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design
- **UI Components**: Radix UI primitives for accessible, unstyled components
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Animations**: Framer Motion for smooth animations and transitions
- **Theme System**: Custom theme provider supporting light/dark modes with CSS variables

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Server Setup**: HTTP server with middleware for JSON parsing and logging
- **Development**: Hot reload with Vite integration in development mode
- **API Structure**: RESTful API design with `/api` prefix for all endpoints
- **Error Handling**: Centralized error handling middleware
- **Static Files**: Serves built frontend assets in production

### Database & ORM
- **Database**: PostgreSQL (configured via Drizzle)
- **ORM**: Drizzle ORM with TypeScript-first approach
- **Schema**: Type-safe database schema definition with Zod validation
- **Migrations**: Drizzle Kit for database migrations
- **Connection**: Neon Database serverless driver for PostgreSQL connections

### Data Storage Strategy
- **Development**: In-memory storage implementation for rapid development
- **Production**: PostgreSQL database with session storage using connect-pg-simple
- **Schema Design**: User entity with username/password authentication structure
- **Type Safety**: Shared types between frontend and backend using Drizzle inference

### Authentication & Security
- **Session Management**: Express sessions with PostgreSQL session store
- **Password Storage**: Configured for secure password handling (implementation pending)
- **CORS & Security**: Standard Express security middleware setup
- **API Security**: Structured error responses without sensitive data exposure

### Development Workflow
- **Build System**: Vite for frontend, esbuild for backend bundling
- **Development**: Concurrent frontend/backend development with hot reload
- **Type Checking**: TypeScript compilation checking without emission
- **Database**: Push-based schema updates with `db:push` command
- **Environment**: NODE_ENV-based configuration for development/production

### Component Architecture
- **Design System**: shadcn/ui components with consistent styling
- **Layout Structure**: Modular section-based components (Hero, Projects, Skills, About, Contact, Footer)
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Accessibility**: Focus on semantic HTML and ARIA compliance through Radix primitives
- **Code Organization**: Clear separation between UI components, pages, hooks, and utilities

## External Dependencies

### Core Framework Dependencies
- **@tanstack/react-query**: Server state management and caching
- **express**: Backend web framework
- **drizzle-orm**: Type-safe SQL ORM
- **@neondatabase/serverless**: PostgreSQL serverless connection driver

### UI & Styling Dependencies
- **@radix-ui/***: Comprehensive set of accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **framer-motion**: Animation library for React
- **class-variance-authority**: Type-safe component variants
- **clsx & tailwind-merge**: Conditional className utilities

### Development & Build Tools
- **vite**: Fast build tool and dev server
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript bundler for production builds
- **drizzle-kit**: Database migration and introspection toolkit

### Form & Validation
- **react-hook-form**: Performant form handling
- **@hookform/resolvers**: Form validation resolvers
- **zod**: TypeScript-first schema validation (via drizzle-zod)

### Session & Storage
- **connect-pg-simple**: PostgreSQL session store for Express
- **express-session**: Session middleware for Express (implied dependency)

### Icons & Assets
- **lucide-react**: Consistent icon library
- **react-icons**: Additional icon collections
- **Google Fonts**: Inter font family for typography

### Development Environment
- **@replit/***: Replit-specific development tools and error handling
- **wouter**: Lightweight router for React applications