import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import GetTasks from './GetTasks';

function ToDo() {
  return (
    <div>
      <h1 className='mainhead'>To-Do List</h1>
      <p><em>A place to manage all your work.Create and manage your tasks here.</em></p>
      <img className='image' src="Images/Todolist.jpg" alt="Sorry!" />
      <br></br>
      <MyToDoList/>
      <CreateNewToDoList/>
      <Setstatepractice/>
      <Ternarypractice/>
    </div>
    
  );
}

function MyToDoList()
{
  return(
    <div>
      <h2 className="mytodo"><Link to="/my-todo-list">My To-Do List</Link></h2>
      <p><em><small>Click on "My ToDo List" to look at your to-do list</small></em></p>
    </div>
  )
}

function CreateNewToDoList()
{
  return(
    <><h2 className="createnewtodo"><Link to="/post-task">Create your To-Do List</Link></h2>
    <p><em><small>Save all your tasks here!</small></em></p>
    </>
  )
}

const Setstatepractice = () => {

  const [user,setUser] = useState("existingUser");

  useEffect(()=>
    {
  if(user=== "existingUser")
    {
      setUser("Welcome")

    }
    else if(user === "newUser")
      {
        setUser("Create")
      }
    },[]
  )
  return (
    <div>
      <p className="insidetodo">{user} back to your To-Do List!!</p>
    </div>
  )
}

const Ternarypractice = () => {

  const [client,setClient] = useState(true);

  return (
    <div>
      <p className="ternanypara">
        {client ? "Welcome back to your To-Do List!" : "Hello! Create your To-Do List here."}
      </p>
    </div>
  )
}


export default ToDo
