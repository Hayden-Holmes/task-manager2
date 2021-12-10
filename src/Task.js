

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import React from "react"



  
/*passes paramater to task*/
const Task =({Title, Date, Description, Prioty, Class}) => {

    /*toggles the complete task switch*/
    const [states, setStates] = React.useState({status: true})   
    const handleChanges = (event) => {
      setStates({ ...states, [event.target.name]: event.target.checked })
    }
    

    
    
      
    return(
        <div
            style={{
                width:"700px",
                border:"2px solid black",
                borderRadius: "5px",
                padding: "5px",
                margin: "10px ",
                fontSize: "15px",
                float: "left",
                background: "#333399",
                color: "white",
                maxHeight: "10 px",
                
                
                
            }}>
            
            {/* Displays task title, date, description, prioty, and class, and the complete switch}*/}
            <h3 >{Title}</h3>
            <p>{Date}</p>
            <p>{Description}</p>
            <p>{Prioty}</p>
            <p>{Class}</p>
            
            {/*switch to toggle task as incomplete or complete*/}
            <FormControlLabel
        control={
          <Switch
            checked={states.status}
            onChange={handleChanges}
            color="primary"
            name="status"
          />
        }
        label="Task Complete"
      />
            
            

        </div>
        
    )
}

export default Task