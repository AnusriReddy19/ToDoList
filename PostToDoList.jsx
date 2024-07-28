import React, { useState } from 'react';

const PostToDoList = () => {
  const [userName, setUserName] = useState('');
  const [tasks, setTasks] = useState([{ toDoTask: '', toDoDescription: '', toDoDeadline: '' }]);

  const handleTaskChange = (index, event) => {
    const updatedTasks = [...tasks];
    updatedTasks[index][event.target.name] = event.target.value;
    setTasks(updatedTasks);
  };


  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const taskDetails = { userName, tasks };
    console.log(taskDetails);
    const response = await fetch('http://localhost:8080/v1/todolist/tasks', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskDetails),
    });
    // Handle response if needed
  };

  return (
    <div>
      <h2>Enter your Task details below and save!!</h2>
      <form onSubmit={handleFormSubmit}>
        <label>What is your User Name?</label>
        <input
          type="text"
          name="userName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />

        {tasks.map((task, index) => (
          <div key={index}>
            <label>What is your to-do task?</label>
            <input
              type="text"
              name="toDoTask"
              value={task.toDoTask}
              onChange={(e) => handleTaskChange(index, e)}
            />
            <br />

            <label>Describe your task?</label>
            <input
              type="text"
              name="toDoDescription"
              value={task.toDoDescription}
              onChange={(e) => handleTaskChange(index, e)}
            />
            <br />

            <label>When is your Deadline?</label>
            <input
              type="datetime-local"
              name="toDoDeadline"
              value={task.toDoDeadline}
              onChange={(e) => handleTaskChange(index, e)}
            />
            <br />
          </div>
        ))}

       
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default PostToDoList;
