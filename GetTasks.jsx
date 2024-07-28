import React, { useState } from 'react';
import axios from 'axios';

const GetTasks = () => {
  const [userId, setUserId] = useState("");
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setUserId(event.target.value);
  };

  const fetchTasks = () => {
    if (userId) {
      axios.get(`http://localhost:8080/v1/todolist/tasks/${userId}`)
        .then(response => {
          setTasks(response.data);
          console.log(response.data); // Log response data here
        })
        .catch(error => {
          console.error('Error fetching tasks:', error);
          setError('Error fetching tasks');
        });
    }
  };

  const handleDeleteTask = (taskName) => {

    // Optionally, make an API call to delete the task on the backend
    axios.delete(`http://localhost:8080/v1/todolist/tasks/${userId}/${taskName}`)
      .then(() => {
        
      })
      .catch(error => {
        console.error('Error deleting task:', error);
        setError('Error deleting task');
      });
  };

  return (
    <div>
      <h1>Enter User ID to View Tasks</h1>
      <input
        type="text"
        placeholder="Enter your UserId"
        value={userId}
        onChange={handleInputChange}
      />
      <br />
      <button onClick={fetchTasks}>Submit</button>
      {error && <p>{error}</p>}
      {tasks.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Description</th>
              <th>Created</th>
              <th>Deadline</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index}>
                <td>{task.toDoTask}</td>
                <td>{task.toDoDescription}</td>
                <td>{new Date(task.toDoCreated).toLocaleString()}</td>
                <td>{new Date(task.toDoDeadline).toLocaleString()}</td>
                <td>
                  <button onClick={() => handleDeleteTask(task.toDoTask)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default GetTasks;
