import logo from './logo.svg';
import './App.css';
import Header from '../src/components/header';
import Tasks from '../src/components/tasks';
import {useState } from 'react';


function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Coding Interview',
        day: 'April 12th at 3pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Pick up bubble wrap',
        reminder: true,
    },
    {
        id: 3,
        text: 'Packing Stuff',
        day: 'April 29th at 10am',
        reminder: false,
    }
])

// Delete Tak

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id));
}

// Toggle Reminder 
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id  === id ? { ...task, reminder: !task.reminder} : task))
}
  return (
    <div className = 'container'>
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}  onToggle={toggleReminder}/> : 'No Tasks To Show'}
    </div>
  );
}

export default App;
