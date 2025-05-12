# Copilot Instructions

## Project Overview
This project is a React-based website for a chilean psychologist called Fernanda Lira, built using Vite as the build tool. It includes modern tools and libraries for styling, routing, and component-based development.
All the content should be in Spanish, and the website should be responsive and accessible.
The website should include the following pages:
- Home
- About
- Services
- Contact
- Blog

## Key Files and Directories

### Configuration Files
- **`package.json`**: Defines project dependencies and scripts.
  - Key scripts:
    - `dev`: Starts the development server.
    - `build`: Builds the project for production.
    - `lint`: Runs ESLint for code linting.
    - `preview`: Previews the production build.
  - Dependencies:
    - `react`, `react-dom`: Core React libraries.
    - `react-router-dom`: For routing.
    - `lucide-react`: Icon library.
  - DevDependencies:
    - `@vitejs/plugin-react`: Vite plugin for React.
    - `eslint`: Linting tool.

- **`vite.config.ts`**: Vite configuration file.
  - Plugins: Uses `@vitejs/plugin-react` for React support.
  - Optimizations: Excludes `lucide-react` from dependency pre-bundling.

- **`tailwind.config.js`**: Tailwind CSS configuration file.
  - Content: Scans `index.html` and all files in `src/` for class names.
  - Theme: Extends default colors with custom blue and green shades.

### Source Code
- **`src/`**: Contains the main application code.
  - **`components/`**: Reusable UI components like `Button`, `Header`, and `Footer`.
  - **`pages/`**: Page components for routing, such as `HomePage` and `ContactPage`.
  - **`styles/`**: Global styles, including animations.

## Development Workflow
1. Install dependencies: `npm install`
2. Start the development server: `npm run dev`
3. Build for production: `npm run build`
4. Preview the production build: `npm run preview`

## Notes for Copilot
- Use React and TypeScript best practices.
- Follow Tailwind CSS conventions for styling.
- Ensure compatibility with Vite's module system.
- Optimize for reusability and maintainability of components.
