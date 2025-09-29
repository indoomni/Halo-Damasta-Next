# Project Overview

This is a Next.js project for Halo-Damasta. It appears to be a web application for a financial technology company called "Damasta". The application is built with React and uses `next-intl` for internationalization. The styling is done using CSS-in-JS with `styled-jsx`.

This project was initiated with TeleportHQ. TeleportHQ will push the latest changes to "main" branch. If a change is detected in the branch, it should be merged to "master" branch. We will add our codes here. It should handle the Docker-based CI scripts, and GitHub Actions.

## Building and Running

To get the project up and running, you can use the following commands:

- **Development:** `npm run dev`
- **Build:** `npm run build`
- **Start:** `npm run start`
- **Export:** `npm run export`

## Development Conventions

- **Styling:** The project uses CSS-in-JS with `styled-jsx`.
- **Internationalization:** The project uses `next-intl` for internationalization. The locale files are located in the `locales` directory.
- **Components:** The project is component-based, with components located in the `components` directory.
- **Routing:** The project uses the Next.js file-based routing system. The pages are located in the `pages` directory.
- **Global State:** The project uses a global context for managing global state, which is defined in `global-context.js`.
- **Path Aliases:** The project uses a path alias `@/*` for `./*` which is configured in `jsconfig.json`.
