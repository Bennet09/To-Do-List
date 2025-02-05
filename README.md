# Todo List Application

A simple and efficient todo list application with a Node.js backend and vanilla JavaScript frontend.

## Features

- Add new tasks
- Mark tasks as complete/incomplete
- Delete tasks
- Persistent data storage on server
- Clean and responsive UI

## Tech Stack

- Backend: Node.js with native HTTP module
- Frontend: HTML, CSS, JavaScript
- No external dependencies required

## Project Structure
    todo-app/ ├── server.js ├── index.html ├── style.css ├── script.js └── README.md

## Getting Started

1. Start the server:
```bash
node server.js
Open index.html in your browser or serve it through a local server

## The application will be running at http://127.0.0.1:3000

API Endpoints
GET /todos - Retrieve all todos
POST /todos - Create a new todo
PUT /todos/:id - Toggle todo completion status
DELETE /todos/:id - Remove a todo
Development
Clone the repository
Make sure Node.js is installed on your system
Run the server using node server.js
Make changes to the code as needed
Refresh the browser to see your changes
Browser Support
Works on all modern browsers:

Chrome
Firefox
Safari
Edge
Contributing
Feel free to fork this project and submit pull requests with improvements.

License
MIT License
