import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';

function App() {
  return (
<div className="todo-app">
  <div className='sidebar'>
 
      <TodoList/>

  </div>

</div>

  );
}

export default App;
