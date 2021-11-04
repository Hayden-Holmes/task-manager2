
 


const Task =({Title, Date, Description}) => {

    
    return(
        <div
            style={{
                maxWidth:"500px",
                border:"2px solid black",
                borderRadius: "5px",
                padding: "20px",
                margin: "20px auto",
                fontSize: "20px",
                
                
            }}>
            
            <h3 >{Title}</h3>
            <p>{Date}</p>
            <p>{Description}</p>

        </div>
    )
}

export default Task