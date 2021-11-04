
import './App.css';
import Task  from "./Task"
import React, {useState} from "react"
import TextField from '@material-ui/core/TextField';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';



 
function App() {

  
    const [state, setState]=useState({
      Title:"",
      Description:"",
      date: new Date(""),
    })
    const handleChange = e=>{
      setState({
        ...state,
        [e.target.name]: e.target.value,
    })
  }
  
  

  const [tasks,setTasks]= useState([])
  const [value, onChange] = useState(new Date());

  function addTask(){
    setTasks([...tasks, state])
    setState({
      Title:"",
      Description:"",
      date: new Date(""),

    })  
  }
  const sortedTask = tasks.sort((a, b) => b.date - a.date);
  
  
  return (
      
      
      
    
      
    <div className="App">

      
        
<Calendar
        onChange={onChange}
        value={value}
      />
        <h1>Task Manager</h1>
        <form>
          <label>
            Title:{" "}
            <input 
             type="text" 
             name="Title"
             value={state.Title} 
             onChange={handleChange}
             />
          </label>{" "}
          <label>
            Date:{" "}
            <TextField
             type="date"
             name="Date" 
             value={state.Date} 
             InputLabelProps={{
               shrink: true,
             }}
             onChange={handleChange}

             />
          </label>
          <br/>
          <label>
            Description:{" "}
            <textarea
              name="Description"
              value={state.Description}
              onChange={handleChange}
            />
          </label>
          <br/><br/>     
        </form>
        
        <button onClick={addTask}>Add Task</button>
        {sortedTask.map((task)=>(
          <Task
            Title={task.Title}
            Date={task.Date}
            Description={task.Description}
          />
        ))}
       

      </div>
  );

}
export default App;
