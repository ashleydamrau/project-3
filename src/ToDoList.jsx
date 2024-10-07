import React, {useState} from 'react';
import ToDoListStyle from './ToDoListStyle.css';

function ToDoList() {

  const [tasks, setTasks] = useState(["Eat Breakfast", "Go Grocery Shopping", "Do Laundry"]);
  const [newTask, setNewTask] = useState("");
  const [completedTasks, setCompletedTasks] = useState([]);

  function toDoListInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if(newTask.trim() !== "") {
      setTasks(t => [...t, newTask]);
      setNewTask("");
    }
  }
  
  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);

  }
  
  function deleteCompletedTask(index) {
    const updatedCompletedTasks = completedTasks.filter((_, i) => i !== index);
    setCompletedTasks(updatedCompletedTasks);
  }

function tasksCompleted(index) {
  const completedTask = tasks[index];
  setCompletedTasks((completed) => [...completed, completedTask]);
  deleteTask(index);
}

  return(
    <div className="toDoList">
      <div className="tasksContainer">
      <h1 className="toDoListHeader">ToDo List</h1>
      <div>
        <input 
          type="text"
          className="toDoListInput"
          placeholder="Enter a new Task"
          value = {newTask}
          onChange = {toDoListInputChange}
          />
          <button
            className="toDoListAddButton"
            onClick={addTask}>
            Add
          </button>
      </div>

      <ol>
        {tasks.map((task, index) => 
        <li key={index}>
          <button 
            className="toDoListCompletedButton" 
            onClick={() => tasksCompleted(index)}>
            ✓
          </button>

          <span className="text">{task}</span>
          <button 
            className="toDolistDeleteButton"
            onClick={() => deleteTask(index)}>
            Delete
          </button>
        </li>
        )}
      </ol>
      </div>

      <div className="completedTasks">
        <h1>Completed</h1>
        <ol>
          {completedTasks.map((task, index) => (
            <li className="completedList" key={index}>
              <span className="completedText">{task}</span>
              <button 
                className="toDolistDeleteButtonCompleted"
                onClick={() => deleteCompletedTask(index)}>
                Delete
              </button>
            </li>
          ))}
        </ol>

      </div>

      

    </div>);
}


export default ToDoList