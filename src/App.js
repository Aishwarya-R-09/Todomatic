import './App.css';
import Todo from './Todo';
import AddTask from './AddTask';
import {useState} from 'react';
import {nanoid} from 'nanoid';

function App() {

  const [todoarr, setTodoArr] = useState([]); 
  const [filter, setFilter] = useState('All');
  const FILTER_MAP = {
    All: () => true,
    Active: task => !task.completed,
    Completed: task => task.completed
  };

  function completeTask(id){
    let temparr = [...todoarr]
    for(let ele of temparr){
      if(ele.id === id ){
        ele.completed = true;
        break;
      }
    }
    setTodoArr(temparr);

  }

  function saveTask(id,newName){
    let temparr = [...todoarr]
    for(let ele of temparr){
      if(ele.id === id ){
        ele.name = newName;
        break;
      }
    }
    setTodoArr(temparr);

  }
  
  function addTask(taskName){
    if(taskName===""){
      alert("Enter valid task name");
      return;
    }
    let new_task = { id:nanoid(), name : taskName, completed: false}
    let new_arr = [...todoarr];
    new_arr.push(new_task);
    setTodoArr(new_arr);
  }

  function deleteTask(id){
    let index;
    let temparr = [...todoarr];
    let l = temparr.length;
    for(let i=0; i<l; i++){
      if(temparr[i].id === id ){
        index = i;
        break;
      }
    }
    let newArr = todoarr.slice(0,index).concat(todoarr.slice(index+1,l));
    setTodoArr(newArr);
  }

  

  return (
    <div className="container pt-4">
      <AddTask addTask={addTask} />

      <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="button" onClick={()=>{setFilter('All')}}>All</button>
        <button type="button" className="button" onClick={()=>{setFilter('Active')}}>Active</button>
        <button type="button" className="button" onClick={()=>{setFilter('Completed')}}>Completed</button>
      </div>
      <h5 className="mt-4"><b>{filter} Tasks</b></h5>
      { todoarr.filter(FILTER_MAP[filter]).map(ele =>{
        return(
          <>
          {
            <Todo name={ele.name} id={ele.id} completed={ele.completed} key={ele.id}
             completeTask={completeTask} saveTask = {saveTask} deleteTask={deleteTask}/>
          }
          </>
        )
      })}
      
    </div>
  
  );
}

export default App;
