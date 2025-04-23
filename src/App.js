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
    //clears cookies by iterating over the cookies and deleting them.
    for (let cookie of cookies) {
      const cookieName = cookie.split('=')[0].trim();
      document.cookie = `${cookieName}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;//the expiration date is set in the past to ensure the browser 
      // recognizes the cookie as expired, prompting its immediate removal
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
        localStorage.setItem('todos', JSON.stringify(todos));//localStorage stores in the form of strings
        setIsLoading(false);
      }, 1000); // Simulate delay for saving
    }
  }, [todos]);

  //check if empty, show warning
  const addTodo = () => {
    if (newTodo.trim() === "") {
      setShowWarning(true);
      setTimeout(() => setShowWarning(false), 3000);
      return;
    }
  //  React will re-render the component with the new todos array whenever setTodos is called.
    setTodos([...todos, {
     //Date.now() returns the current timestamp in milliseconds 
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
// triggers the addTodo function when the  enter key is pressed.
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  // Filter todos based on search term
  const filteredTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

//Rendering the Component
  return (
    <div className="container">
      <h1>Todo App</h1>
      
      //input tag is used for entering a search term to filter tasks.
      <div>
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchTerm}//binds the input value to the searchTerm state
          onChange={(e) => setSearchTerm(e.target.value)}//event handler updates the searchTerm
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
