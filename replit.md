# Masseria Termiteto - Luxury Apulian Resort Website

## Overview

This is a luxury resort website for Masseria Termiteto, an authentic Apulian resort in Monopoli, Italy. The website showcases the property's luxury accommodations (including historical trulli), spa services, wedding venues, and exclusive amenities. Built as a full-stack application with React frontend and Express backend, it serves as both an informational site and booking platform for this high-end Mediterranean resort experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Framework**: Shadcn/UI components with Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with custom luxury-themed color palette and typography
- **Routing**: Wouter for client-side routing (lightweight React router)
- **State Management**: TanStack React Query for server state management
- **Font Strategy**: Google Fonts integration (Playfair Display for headings, Inter for body text)

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Development Setup**: Development server with hot module replacement via Vite integration
- **Session Management**: Basic session handling with connect-pg-simple for PostgreSQL session store

### Database Design
- **Primary Database**: PostgreSQL (configured for Neon Database)
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Current Schema**: Basic user authentication system with users table (username/password)
- **Storage Pattern**: Abstracted storage interface with in-memory implementation for development and PostgreSQL for production

### Authentication & Authorization
- **Strategy**: Username/password based authentication (basic implementation)
- **Session Storage**: PostgreSQL-backed sessions via connect-pg-simple
- **Security**: Basic credential validation with plans for expansion

### Development & Build Process
- **Development**: Concurrent frontend (Vite) and backend (tsx) development servers
- **Build Process**: Frontend built with Vite, backend compiled with esbuild
- **Asset Management**: Static asset serving with development-time asset proxying

## External Dependencies

### UI & Design System
- **Radix UI**: Complete set of accessible UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Lucide React**: Icon system for consistent iconography
- **Class Variance Authority**: Component variant management
- **Embla Carousel**: Touch-friendly carousel component

### Data & State Management  
- **TanStack React Query**: Server state management and caching
- **React Hook Form**: Form handling with @hookform/resolvers
- **Drizzle ORM**: Type-safe database operations
- **Drizzle Zod**: Schema validation integration
- **Date-fns**: Date manipulation utilities

### Database & Infrastructure
- **Neon Database**: Serverless PostgreSQL database (@neondatabase/serverless)
- **PostgreSQL**: Primary database with session store support
- **Connect PG Simple**: PostgreSQL session store for Express

### Development Tools
- **Vite**: Frontend build tool with HMR and plugin ecosystem
- **ESBuild**: Backend compilation for production builds
- **TypeScript**: Type safety across frontend and backend
- **Replit Integration**: Development environment plugins for Replit compatibility

### Styling & Assets
- **Google Fonts**: Typography system (Playfair Display, Inter)
- **Unsplash & Pixabay**: Image assets for luxury resort photography
- **PostCSS**: CSS processing with Autoprefixer

### Form & Input Handling
- **Zod**: Schema validation for forms and API contracts
- **React Hook Form**: Form state management with validation
- **Input OTP**: One-time password input components
- **CMDK**: Command palette/search functionality