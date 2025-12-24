# GEMINI.md

## Project Overview

This is a portfolio website built with Next.js 14 and styled with HeroUI and Tailwind CSS. The project showcases the developer's skills and experience as a Fullstack Developer. The homepage features a hero section with a brief introduction, links to projects and CV, and a list of technologies the developer is proficient in. The project is designed to be easily customizable and extensible.

**Key Technologies:**

- **Framework:** Next.js 14
- **UI:** HeroUI, Tailwind CSS
- **Languages:** TypeScript
- **Animation:** Framer Motion
- **Theming:** next-themes

**Project Structure:**

The project follows the standard Next.js 14 `app` directory structure.

- `app/`: Contains the main application logic, including layouts and pages.
- `components/`: Contains reusable React components.
- `config/`: Contains site-wide configuration, such as the site name and description.
- `public/`: Contains static assets, such as images and fonts.
- `styles/`: Contains global CSS styles.

## Building and Running

### Prerequisites

- Node.js (v18 or later)
- npm, yarn, or pnpm

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/heroui-inc/next-app-template.git
    ```

2.  Install the dependencies:

    ```bash
    npm install
    ```

### Running the Development Server

To run the development server, use the following command:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

### Building for Production

To build the application for production, use the following command:

```bash
npm run build
```

This will create an optimized build of the application in the `.next` directory.

### Running in Production

To run the application in production, use the following command:

```bash
npm run start
```

## Development Conventions

### Linting

The project uses ESLint for code linting. To lint the code, use the following command:

```bash
npm run lint
```

### Coding Style

The project follows the standard Next.js and React coding conventions. The code is written in TypeScript and uses modern JavaScript features.

### Testing

There are no testing frameworks set up in this project.
