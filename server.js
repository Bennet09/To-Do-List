const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

// Initialize in-memory storage
let todos = [];

const server = http.createServer((req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Content-Type', 'application/json');

  // Parse URL and method
  const url = req.url;
  const method = req.method;

  if (method === 'GET' && url === '/todos') {
    // List all todos
    res.statusCode = 200;
    res.end(JSON.stringify(todos));
  } 
  else if (method === 'POST' && url === '/todos') {
    // Add new todo
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const newTodo = JSON.parse(body);
      const todo = {
        id: Date.now(),
        title: newTodo.title,
        completed: false
      };
      todos.push(todo);
      res.statusCode = 201;
      res.end(JSON.stringify(todo));
    });
  }
  else if (method === 'DELETE' && url.startsWith('/todos/')) {
    // Remove todo
    const id = parseInt(url.split('/')[2]);
    todos = todos.filter(todo => todo.id !== id);
    res.statusCode = 200;
    res.end(JSON.stringify({ message: 'Todo deleted' }));
  }
  else if (method === 'PUT' && url.startsWith('/todos/')) {
    // Toggle todo completion
    const id = parseInt(url.split('/')[2]);
    const todo = todos.find(todo => todo.id === id);
    
    if (!todo) {
      res.statusCode = 404;
      res.end(JSON.stringify({ message: 'Todo not found' }));
      return;
    }

    todo.completed = !todo.completed;
    res.statusCode = 200;
    res.end(JSON.stringify(todo));
  }
  else {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: 'Route not found' }));
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
