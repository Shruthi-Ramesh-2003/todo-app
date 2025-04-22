import React, { useEffect, useState } from 'react';
import './App.css';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Clear cookies and localStorage on component mount
  useEffect(() => {
    // Clear cookies
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      const cookieName = cookie.split('=')[0].trim();
      document.cookie = `${cookieName}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
    }

    // Clear localStorage
    localStorage.clear();

    // Load todos from localStorage (if available) after clearing
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    if (todos.length > 0) {
      setIsLoading(true);
      setTimeout(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
        setIsLoading(false);
      }, 1000); // Simulate delay for saving
    }
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim() === "") {
      setShowWarning(true);
      setTimeout(() => setShowWarning(false), 3000);
      return;
    }

    setTodos([...todos, {
      id: Date.now(),
      text: newTodo,
      completed: false
    }]);
    setNewTodo("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  // Filter todos based on search term
  const filteredTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Todo Application</h1>
      

      <div>
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="Enter new task"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={addTodo}>Add Task</button>
      </div>

      {showWarning && (
        <div className="warning">Please enter a task before adding!</div>
      )}

      {/* Spinner for loading state */}
      {isLoading && (
        <div className="spinner">
          <div className="loader"></div>
          Saving your todo...
        </div>
      )}

      <ol>
        {filteredTodos.length === 0 ? (
          <p>
            {todos.length === 0 ? 'No tasks yet. Add one above!' : 'No tasks match your search.'}
          </p>
        ) : (
          filteredTodos.map((todo) => (
            <li key={todo.id}>
              <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                {todo.text}
              </span>
              <div>
                <button onClick={() => toggleTodo(todo.id)}>
                  {todo.completed ? "✓ Done" : "Mark Done"}
                </button>
                <button onClick={() => deleteTodo(todo.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))
        )}
      </ol>
    </div>
  );
};

export default TodoApp;
