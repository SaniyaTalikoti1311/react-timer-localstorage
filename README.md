# React Persistent Timer

A simple timer built with React that keeps its value after a page refresh, using `localStorage`.

**Live demo:** https://react-timer-localstorage.vercel.app/

## Features

- Start, stop and reset the timer
- Timer value is saved in `localStorage` and restored after a refresh
- Running / Paused status badge
- Buttons are disabled when they don't apply (START while running, STOP while paused)
- Responsive layout for mobile and desktop
- Also includes a persistent counter component (`PersistantCounter`) that uses the same idea

## Tech Stack

- React
- Vite
- HTML, CSS, JavaScript
- Deployed on Vercel

## How Persistence Works

1. **Read:** `useState` uses a lazy initializer that reads the saved value from `localStorage` when the component first loads.
2. **Write:** a `useEffect` with `[seconds]` as its dependency saves the value every time it changes.
3. The interval is created in a separate `useEffect` that depends on `isRunning`, and it is cleaned up with `clearInterval` to avoid memory leaks.

After a refresh the number is restored, but the timer stays paused until START is pressed.

## Getting Started

```bash
# clone the repository
git clone https://github.com/SaniyaTalikoti1311/react-timer-localstorage.git

# go to the project folder
cd react-timer-localstorage

# install dependencies
npm install

# start the development server
npm run dev
```

Then open the local URL shown in the terminal (usually http://localhost:5173).

## Project Structure

```
src/
  component/
    Timer.jsx
    Timer.css
    PersistantCounter.jsx
  App.jsx
  main.jsx
  index.css
```

## What I Learned

- Using `useState` with a lazy initializer
- Using `useEffect` with dependency arrays and cleanup functions
- Saving and reading data with `localStorage`
- Deploying a Vite + React app to Vercel

## Author

**Saniya Talikoti**
GitHub: [@SaniyaTalikoti1311](https://github.com/SaniyaTalikoti1311)
