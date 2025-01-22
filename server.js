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
    res.statusCode = 200;
    res.end(JSON.stringify(todos));
  } 
  else if (method === 'POST' && url === '/todos') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const newTodo = JSON.parse(body);
      // Trim and limit the title to 100 characters
      const trimmedTitle = newTodo.title.trim().substring(0, 100);
      
      if (trimmedTitle.length === 0) {
        res.statusCode = 400;
        res.end(JSON.stringify({ message: 'Todo title cannot be empty' }));
        return;
      }

      const todo = {
        id: Date.now(),
        title: trimmedTitle,
        completed: false
      };
      todos.push(todo);
      res.statusCode = 201;
      res.end(JSON.stringify(todo));
    });
  }
  // Rest of the code remains the same
  else if (method === 'DELETE' && url.startsWith('/todos/')) {
    const id = parseInt(url.split('/')[2]);
    todos = todos.filter(todo => todo.id !== id);
    res.statusCode = 200;
    res.end(JSON.stringify({ message: 'Todo deleted' }));
  }
  else if (method === 'PUT' && url.startsWith('/todos/')) {
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
    res.end(JSON.stringify({ message: 'Hello there 👋, the server is running' }));
  }
  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
