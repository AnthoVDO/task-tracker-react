import {useState} from  'react';
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointement',
        day: '12/02/2021 at 17:00',
        reminder: true
    },
    {
        id: 2,
        text: 'Party at home',
        day: '15/02/2021 at 18:00',
        reminder: false
    },
    {
        id: 3, 
        text: "Team meeting",
        day: "16/02/2021 at 09:00",
        reminder: true
    }
])
//Add task
const addTask = (task)=>{
  const number = tasks.length-1;
  const id = tasks[number].id + 1;
  const newTask = {id, ...task};
  setTasks([...tasks, newTask]);
}


//Delete a task

const deleteTask = (id)=>{
  setTasks(tasks.filter((task)=>
    task.id !== id))
}

//Toggle reminder
const toggleReminder = (id)=>{
  setTasks(tasks.map((task)=> task.id === id ? { ...task, reminder: !task.reminder} : task))
}

  return (
    <div className="container">
      <Header showTaskAdder={()=>setShowAddTask(!showAddTask)} changeBtnTxt={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}

      {
        tasks.length > 0 ? <Tasks 
      tasks={tasks}
      onDelete={deleteTask}
      onToggle={toggleReminder}
      /> : "No Task to show"
      }
      
    </div>
  );
}

export default App;
