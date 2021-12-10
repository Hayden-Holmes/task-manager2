//imports
import './App.css';
import Task  from "./Task"
import React, {useState} from "react"
import TextField from '@material-ui/core/TextField';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {If, Then} from 'react-if';


 
function App() {
  
    //stores state varibles for task varibles
    const [state, setState]=useState({
      Title:"",
      Description:"",
      Date:"",
      Prioty: "",
      Class: "",
      
      
    })
    //function called when task varibles are inputed
    const handleChange = (e)=>{
      setState({
        ...state,
        [e.target.name]: e.target.value,
    })
  }

  //resets the input fields to eith blank or the first dropdown selection
  const resetInputField = () => {
    setState({
      Title:"",
      Description:"",
      Date:"",
      Prioty: "Prioty Low",
      Class: "Other",
    })
  }
  
  
  //tasks array
  const [tasks,setTasks]= useState([])
  
 
  //adds tasks to the array when add task button is pressed by user calls reset input feild
  function addTask(){
    setTasks([...tasks, state])
    setState({
      
    })  
    console.log(tasks)
    resetInputField()
  }
  
  


 //array for the calender value
 const [value, setValue] = useState("");
  //array to hold the filter value set by the user
  const[filter, setFilter] = useState("All")
  //array to hold a set of filtered task
  const [filteredTasks, setFilteredTasks] = useState([tasks])


  //updates the filtered tasks to only contain tasks that match the filter value
  function updateFilteredTasks(e) { 
    //creates tempory tasks array
    var newTasks = []
    //var to use in for and if functions
    const filterName = e.target.value
    setFilter(filterName)
    
    //filters through tasks and adds them to the filteredTasks array if the filter mathes the tasks value
    if(filterName !== "All") {
      if(filterName==="Date"){
        onChange(value)
      }else{

      for(var i = 0; i < tasks.length; i++) {
        if(tasks[i].Class === filterName) {
          newTasks.push(tasks[i])
          console.log("hello"+tasks[i].Complete)
        }
        else if(tasks[i].Prioty === filterName) {
          newTasks.push(tasks[i])
          console.log("hello"+tasks[i].Complete)
        }
      }
    }
  }
    
    //updates filterTasks to the new array that was created
    console.log(newTasks)
    setFilteredTasks(newTasks)
  }
  
   

  //function called when calender date is changed. 
  //Updates filteredTasks to only include those with the same date as thhe calender value
  const onChange =(nextValue)=> {
    setValue(nextValue)
    
    //changes the date object from the calender to a string in YYYY/MM/DD format 
    //to match the date stored in the string
    const temp=(JSON.stringify(nextValue));
    const givenDate=temp.slice(1,11)
    console.log(givenDate)
    
    //temp array to hold tasks
    var newTasks=[]
    //filteres through all tasks and only adds those to newTasks[] with same date as givenDate
    for(var i = 0; i < tasks.length; i++) {
      console.log(tasks[i].Date)
      console.log("hello"+tasks[i].Complete)
      if(tasks[i].Date === givenDate) {
        newTasks.push(tasks[i])
        
      }
  }

  //sets filteredTasks to newTasks
  console.log(newTasks)
    setFilteredTasks(newTasks)
}


  

  return (
      
      
      
    
      
    <div className="App" 
      style={{
        marginLeft: '40px',

        }}>

      
     {/* Shows Calender */}
    <Calendar
      onChange={onChange}
      value={value}
      type="value"
      
        style={{
          margin: '1000px',
          
        }}/>
        <h1>Task Manager</h1>
        <form>
          {/* Input for task title */}
          <label>
            Title:{" "}
            <input 
             type="text" 
             name="Title"
             value={state.Title}
             onChange={handleChange}
             />
          </label>{" "}
          {/* Input for tasks Date. uses react-caleder to pick date*/}
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

          {/* Input for task Description*/}
          <label>
            Description:{" "}
            <textarea
              name="Description"
              value={state.Description}
              onChange={handleChange}
            />
          </label>
          <br/>

          {/* Dropdown Menue to input Task class */}
          <label>
            Class:{" "}
            <select
              name="Class"
              value={state.Class}
              onChange={handleChange} id="Class">
                <option value="Other">Other</option>
                <option value="Math">Math</option>
                <option value="Science">Science</option>
                <option value="English">English</option>
                <option value="History">History</option>
              </select>
            
          </label>

          {/* Input tasks prioty using a dropdown */}
          <label>
            Prioty:{" "}
            <select name="Prioty" value={state.Prioty}
              onChange={handleChange} id="Prioty">
             <option value="Prioty Low">Prioty Low</option>
             <option value="Prioty Medium">Prioty Medium</option>
              <option value="Prioty High">Prioty High</option>
            </select>
            
          </label>
          <br/>     
        </form>
        <br/>
        

        {/* calls add task function */}
        <button 
          onClick={addTask}
          style={{
            float: "center",
            width: "100px",
            display: 'block', 
            
            
            
            }}>
          Add Task</button>
        <br/>
        
        {/* Gives dropdown to pick filter and calls updateFilteredTasks Function */}
        <label> Filter by:</label>
        <select
          value ={filter}
          onChange={(e) =>updateFilteredTasks(e)}
          >
              <option value="All">All Task</option>
              <option value="Prioty High">Prioty High</option>
              <option value="Prioty Medium">Prioty Medium</option>
              <option value="Prioty Low">Prioty Low</option>
              <option value="Other">Prioty Low</option>
              <option value="Math">Math</option>
              <option value="English">English</option>
              <option value="Science">Science</option>
              <option value="Date">Date</option>
            </select>
            
        
            {/*Shows message when filter is equal to "Date"*/}
            <If condition={filter==="Date"}>
              <Then>
                  Use the calender to select Date
              </Then>
            </If>

              
            {/* If filter = "All" maps all tasks */}
          <If condition={ filter==='All'}>
            <Then>
          
          
             {tasks.map((task)=> (
               <Task
               Title={task.Title}
               Date={task.Date}
               Description={task.Description}
               Class={task.Class}
               Prioty={task.Prioty}
             />
          ))}
          </Then>
        </If>

        {/* If filter != "All" maps filtered Tasks*/}
        {filteredTasks.map((task) => (  
          <Task
          
            Title={task.Title}
            Date={task.Date}
            Description={task.Description}
            Class={task.Class}
            Prioty={task.Prioty}
            Complete={task.Complete}
            
          />
          
        ))}
       
        
      </div>
  );

}
export default App;
