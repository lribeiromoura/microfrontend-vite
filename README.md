# 🚀 Micro-Frontend Application Example

Welcome to the Micro-Frontend Application Example! This project demonstrates how to build and integrate an application in a micro-frontend architecture using Vite, React, TypeScript, and the @originjs/vite-plugin-federation.

## 📖 Table of Contents

- Overview
- Key Features
- Tech Stack
- Project Configuration
- Installation
- Usage
- Available Scripts
- Contribution
- License

## 🎯 Overview

This project contains a remote micro-frontend application that can be consumed by a host application, wich is included too. It is built with Vite for a fast development experience, and TypeScript ensures static typing and code safety. The @originjs/vite-plugin-federation enables easy module federation, making this architecture scalable and modular.

## ⭐ Key Features

- **Fast Development:** Leverage Vite for a blazing-fast development environment with instant hot module replacement.
- **TypeScript:** Ensures static typing, improving code maintainability and reducing errors.
- **Micro-Frontends:** Easily integrate this application with other host projects using module federation.
- **React:** Build reusable UI components with React for a rich user experience.

## 🛠️ Tech Stack

- **Vite**
- **TypeScript**
- **React**
- **@originjs/vite-plugin-federation**
- **Tailwind CSS**

## ⚙️ Project Configuration

The `vite.config.ts` file is set up to expose the `App.tsx` component for host applications to consume:

```typescript
// vite.config.ts (Remote App)

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      // Name that identifies this application that the host will use to import
      name: "remote-app",
      // File that will be available at the remote endpoint
      filename: "remoteEntry.js",
      // Modules (components, functions, etc.) that will be exposed to other projects, here, I am exporting the application as a
      exposes: {
        "./Application": "./src/App.tsx",
      },
      // Shared dependencies
      shared: ["react"],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
});

```

### Configuration Details

- **name:** A unique identifier for the remote application.
- **filename:** The entry file generated during the build.
- **exposes:** Components or modules exposed to the host application.
- **shared:** Shared dependencies to avoid duplication.

## 🛫 Installation

### Prerequisites

- Node.js v22 or higher
- npm or yarn

### Steps

1. Clone the repository and install dependencies:

```bash
npm install
# or
yarn install
```

## 🚀 Usage

### Development

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Access the application at [http://localhost:5173](http://localhost:5173).

### Production Build

Build the application for production:

```bash
npm run build
# or
yarn build
```

The build files will be available in the `dist` folder.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

Access the remote entry file at:

```bash
http://localhost:4173/assets/remoteEntry.js
```

## ✨ Expose Micr front-end
You have to build and preview the remote application for the remote app extends the remoteEntry.js file. After build, you could access the link below to check if the file is avaiable:

```bash
http://localhost:4173/assets/remoteEntry.js
```

## 📜 Available Scripts

- **dev:** Starts the development server.
- **build:** Builds the application for production.
- **preview:** Previews the production build.
- **lint:** Runs ESLint for code linting.
- **format:** Formats the code using Prettier.

## 🤝 Contribution

Contributions are welcome! Feel free to open issues and pull requests for improvements or bug fixes.

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Open a pull request.

## 📝 License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

Built with ❤️ by Leandro Moura

