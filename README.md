# 🧱 DevStack - Build Your Perfect Tech Stack

A modern React application that helps developers discover, compare, and curate their ideal technology stack for web projects.

## 🛠️ Technologies Used

- **React.js** - UI library for building interactive interfaces
- **Vite** - Next-gen frontend build tool
- **Tailwind CSS** - Utility-first CSS framework
- **React-Toastify** - Toast notification library
- **JSON** - Data storage for technology information

## ✨ Features

1. **Interactive Technology Explorer** - Browse 14 curated technologies across Frontend, Backend, Database, Language, Styling, DevOps, and Tools categories with detailed cards showing ratings, difficulty levels, and descriptions.

2. **Custom Stack Builder** - Add technologies to your personal stack with a responsive sidebar panel. Remove individual items or clear the entire stack with one click. Duplicate additions are prevented with toast notifications.

3. **Modern Responsive Design** - Fully responsive layout that adapts seamlessly from mobile to desktop, featuring a sticky navigation bar, hamburger menu for mobile, and a cohesive dark theme with orange-to-pink-to-violet gradient accents.

## 🚀 Getting Started

```bash
npm install
npm run dev
```

---

## ❓ React Q&A

### 1. What is JSX, and why is it used in React?
JSX (JavaScript XML) is a syntax extension for JavaScript that lets you write HTML-like code inside JavaScript files. In React, it's used to describe what the UI should look like, making component code more readable and easier to write than using plain `React.createElement()` calls.

### 2. What is the difference between props and state?
**Props** are read-only values passed from a parent component to a child component — they flow downward. **State** is managed within a component itself and can change over time (usually in response to user actions), triggering re-renders. In this project, props pass technology data into cards, while state tracks the user's stack.

### 3. What does the `useState` hook do, and where did you use it in this project?
`useState` is a React hook that adds local state to functional components. It returns a value and a function to update it. I used it in `App.jsx` for the `technologies` array, `loading` boolean, and `stack` array. I also used it in `Navbar.jsx` for scroll position and mobile menu toggle.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
`useEffect` runs side effects in functional components after rendering — like fetching data, subscribing to events, or timers. I used it to simulate loading the technology data from a JSON file after the component mounts, setting the `loading` state to false once the data is ready.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
The `key` prop helps React identify which items have changed, been added, or removed in a list. Without stable, unique keys, React can't efficiently update the DOM and may render incorrectly or lose component state. In this project, each tech card uses `tech.id` as its unique key.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing different UI based on certain conditions (like state values). One example is the empty stack message in `YourStack.jsx` — when `stack.length === 0`, it shows a placeholder with an icon; otherwise, it renders the list of added technologies with remove buttons.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Data flows **down** via props: the parent passes values to the child as attributes. A child sends data **up** by calling a callback function that the parent passes down as a prop. In this project, `App.jsx` passes `onAddToStack`, `onRemove`, and `onRemoveAll` functions as props to `TechCard` and `YourStack`, so the children can notify the parent of user actions.

