Todo-App
- A simple ToDo application built with React, Node.js, and MongoDB.
## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
## Introduction
This ToDo app is designed to help you manage your tasks efficiently. It provides a clean and user-friendly interface to add, edit, and delete your tasks.

![todo-app](https://github.com/SD191100/images/blob/main/todo-app-image.png?raw=true)

## Features
- Add a new task with a title and description.
- Delete tasks.

## Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)
  
## Getting Started
1. Clone the repository:

```bash
git clone https://github.com/SD191100/react-todo-app.git
```

2. Navigate to the server directory and install dependencies:

```bash
cd todo-app-js-v1
cd backend
npm i
```

3. Start the server:

```bash
node server.js
```
4. Navigate to the client directory and install dependencies:

```bash
cd ../frontend
npm i
```
5. Start the React app:

```bash
npm run dev
```

Project Structure
```bash
todo-app-js-v1
    ├── backend
    │   ├── package.json
    │   ├── package-lock.json
    │   ├── public
    │   │   ├── index.html
    │   │   ├── scripts.js
    │   │   └── styles.css
    │   └── server.js
    └── frontend
        ├── index.html
        ├── package.json
        ├── package-lock.json
        ├── public
        │   └── vite.svg
        ├── src
        │   ├── App.css
        │   ├── App.jsx
        │   ├── components
        │   │   └── Todo.jsx
        │   ├── index.css
        │   └── main.jsx
        ├── vite.config.js
        └── yarn.lock
```

Technologies Used
- React
- Node.js
- MongoDB
