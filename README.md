

# Library Drag & Drop

A simple and lightweight React library for implementing drag-and-drop functionality in your lists.

## Description

This project provides a set of React components (`DragContext`, `DragArea`, and `DragItem`) that leverage the native HTML5 Drag and Drop API to enable reordering of items within a list. It's designed to be easy to integrate and highly customizable.

## Key Features

- **Context-driven:** Uses React Context to manage drag-and-drop state across components.
- **Lightweight:** Minimal dependencies, focusing on core drag-and-drop logic.
- **TypeScript Support:** Fully typed for a better developer experience.
- **Easy to use:** Simple components to wrap your list and items.

## Tech Stack

- **React:** Frontend library.
- **TypeScript:** For static typing.
- **Vite:** Fast build tool and development server.
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
