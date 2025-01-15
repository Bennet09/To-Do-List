// Retrieve and display todos from localStorage
function loadTodos() {
    const todos = JSON.parse(localStorage.getItem('todos') || '[]');
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
    
    todos.forEach(todo => {
        const li = createTodoElement(todo);
        todoList.appendChild(li);
    });
}

// Create a new todo list item element with toggle and delete buttons
function createTodoElement(todo) {
    const li = document.createElement('li');
    li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
    
    // Create and set up the todo text
    const span = document.createElement('span');
    span.textContent = todo.title;
    
    // Create and set up the toggle button
    const toggleBtn = document.createElement('button');
    toggleBtn.textContent = todo.completed ? 'Undo' : 'Complete';
    toggleBtn.onclick = () => toggleTodo(todo.id);
    
    // Create and set up the delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = () => deleteTodo(todo.id);
    
    // Assemble the todo item
    li.appendChild(span);
    li.appendChild(toggleBtn);
    li.appendChild(deleteBtn);
    
    return li;
}

// Add a new todo to localStorage
function addTodo() {
    const input = document.getElementById('todoInput');
    const title = input.value.trim();
    
    if (title) {
        // Get current todos and add new one
        const todos = JSON.parse(localStorage.getItem('todos') || '[]');
        const newTodo = {
            id: Date.now(), // Generate unique ID using timestamp
            title: title,
            completed: false
        };
        
        todos.push(newTodo);
        localStorage.setItem('todos', JSON.stringify(todos));
        input.value = ''; // Clear input field
        loadTodos(); // Refresh the display
    }
}

// Toggle the completed status of a todo
function toggleTodo(id) {
    const todos = JSON.parse(localStorage.getItem('todos') || '[]');
    const todoIndex = todos.findIndex(todo => todo.id === id);
    
    if (todoIndex !== -1) {
        // Flip the completed status
        todos[todoIndex].completed = !todos[todoIndex].completed;
        localStorage.setItem('todos', JSON.stringify(todos));
        loadTodos(); // Refresh the display
    }
}

// Remove a todo from localStorage
function deleteTodo(id) {
    const todos = JSON.parse(localStorage.getItem('todos') || '[]');
    const filteredTodos = todos.filter(todo => todo.id !== id);
    localStorage.setItem('todos', JSON.stringify(filteredTodos));
    loadTodos(); // Refresh the display
}

// Initialize the app by loading todos when the page loads
document.addEventListener('DOMContentLoaded', loadTodos);
