import { useState } from "react"
export default function AddTask(props){
    const [taskName, setTaskName] = useState("")
    return(
        <>
            <h3 id="textAlignment"><b>TodoMatic</b></h3>
            <p id="textAlignment">What needs to be done?</p>
            <input onChange={(event)=>{setTaskName(event.target.value); console.log("Task changed")}}
             value= {taskName} type="text" className="input-group input-group-lg" id="inp"/>
            <div className="d-grid gap-2 mt-3">
                <button className="btn btn-dark" type="button"
                 onClick={()=>{props.addTask(taskName); setTaskName("")}}><b>Add</b></button>
            </div>
        </>
    )
}