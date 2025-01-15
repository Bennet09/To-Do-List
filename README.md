Todo List Application

This repository contains a simple Todo List application built using HTML, CSS, and JavaScript for the frontend and Node.js for the backend. The application allows users to add, view, toggle completion status, and delete todos.

Features

Frontend Features:

Add Todos: Users can input tasks and add them to the list.

Display Todos: Dynamically loads and displays todos stored in the browser's localStorage.

Mark as Completed: Users can toggle the completion status of each task.

Delete Todos: Removes tasks from the list and updates localStorage.

Backend Features:

RESTful API:

GET /todos: Retrieve all todos.

POST /todos: Add a new todo.

PUT /todos/:id: Toggle the completion status of a todo by ID.

DELETE /todos/:id: Delete a todo by ID.

Technologies Used

Frontend:

HTML5: Structuring the UI.

CSS3: Styling the application.

JavaScript: Adding interactivity.

Backend:

Node.js: Provides the server environment.

HTTP Module: Used for handling HTTP requests.

Setup Instructions

Prerequisites:

Node.js installed.

Basic knowledge of JavaScript and command-line tools.

Steps to Run:

Clone the repository:

git clone <repository-url>
cd <repository-folder>

Start the backend server:

node server.js

Open the index.html file in a browser to access the frontend.

(Optional) Use tools like Postman to interact with the API.

API Endpoints

Base URL:

http://127.0.0.1:3000

Routes:

GET /todos: Retrieve all todos.

POST /todos: Add a new todo.

Request Body:

{
  "title": "Your todo title"
}

PUT /todos/:id: Toggle completion status of a todo.

DELETE /todos/:id: Delete a todo by its ID.

Code Structure

Backend:

File: server.js

Implements a REST API using the native http module.

Stores todos in memory (data is reset upon server restart).

Frontend:

HTML File: index.html

Basic structure for displaying and managing todos.

CSS File: style.css

Styling for the application.

JavaScript File: script.js

Handles interaction with the browser's localStorage.

Future Improvements

Add persistent storage for the backend (e.g., a database).

Enhance UI with frameworks like React or Vue.js.

Implement user authentication.

Add more features such as due dates or priority levels.

License

This project is licensed under the MIT License. Feel free to use, modify, and distribute it as needed.
