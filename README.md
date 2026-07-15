

# Library Drag & Drop List

A lightweight, zero-dependency React library for implementing fluid, native drag-and-drop reordering in your lists.

## Overview

This library provides a set of highly composable React components (DragContext, DragArea, and DragItem) built on top of the native HTML5 Drag and Drop API. It abstracts away the complex state management of list reordering, allowing you to build smooth, customizable drag-and-drop interfaces in minutes without bloated external dependencies.

## Key Features

- **Context-Driven** **Architecture**: Leverages React Context to seamlessly manage drag-and-drop states across your component tree.
- **Ultra-Lightweight**: Zero heavy third-party dependencies, focusing strictly on core performance and native browser capabilities.
- **First-Class** **TypeScript** **Support**: Fully typed out-of-the-box for robust autocomplete and compile-time safety.
- **Developer-Friendly** **API**: Intuitive component wrappers that adapt to your existing UI and layout patterns.

## Tech Stack

- **React**: Frontend library.
- **TypeScript:** For reliable static typing.
- **Vite:** Next-generation frontend tooling for rapid development and building.
- **Tailwind CSS:** For styling (optional but included).

## Installation and Setup

### 1. Clone the project

```sh
git clone git@github.com:nemanja85/library-drag-drop.git
```

### 2. Navigate to the project directory

```sh
cd library-drag-drop
```

### 3. Install the required dependencies

```sh
npm install
```

### 4. Running the Project

To start the development server, use the following command:

```sh
npm run dev
```

## Project Structure

```text
library-drag-drop/
├── public/              # Static assets
├── src/
│   ├── assets/          # Project images and icons
│   ├── components/      # Core Drag and Drop components
│   │   ├── DragArea.tsx
│   │   ├── DragContext.tsx
│   │   ├── DragItem.tsx
│   │   └── index.ts     # Component exports
│   ├── App.tsx          # Example usage
│   ├── main.tsx         # Entry point
│   ├── index.css        # Global styles (Tailwind)
│   └── users.json       # Mock data for example
├── index.html           # Main HTML file
├── package.json         # Project dependencies and scripts
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```
