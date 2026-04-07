# Copilot Instructions

This is a personal website project built as a client-side React application using Vite.

## Primary stack
- React
- React Bootstrap
- React Router
- Client-side only: no backend code, no server-side rendering, no API server required for core pages

## What to do
- Keep work focused on the browser app in `src/`
- Use `react-bootstrap` for layout and UI components whenever possible
- Use `react-router-dom` for navigation and page routing
- Maintain a clean client-side architecture with components, routes, and styles
- Do not introduce server-side rendering or backend framework dependencies

## Key files and conventions
- `package.json` defines the expected stack and scripts
- `src/main.jsx` bootstraps the app with `HashRouter` and imports Bootstrap CSS
- `src/App.jsx` is the main entry component and should coordinate page routing or layout
- `src/index.css` and `src/App.css` contain app styling

## Useful commands
- `npm run dev` — start the Vite dev server
- `npm run build` — build the production bundle
- `npm run preview` — preview the production build
- `npm run lint` — check code quality with ESLint

## Notes
- Prefer React Bootstrap components for UI patterns rather than plain CSS wherever it makes sense
- Keep changes compatible with a simple static deploy workflow
- Link to the existing `README.md` for Vite template details rather than duplicating that content
