import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'
import ToDo from './ToDoList.jsx'
import './ToDo.css'
import GetTasks from './GetTasks.jsx'
import CreateList from './CreateList.jsx';
import PostToDoList from './PostToDoList.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className='App'>
        <nav>
            <Link to="/">Home</Link> |
            <Link to="/another-get">Trail Get</Link>   
        </nav>
        
        <Routes>
          <Route path="/" element={<ToDo />} />
          <Route path="/my-todo-list" element={<GetTasks />} />
          <Route path="/create-tasks" element={<CreateList />} />
          <Route path="/post-task" element={<PostToDoList/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
