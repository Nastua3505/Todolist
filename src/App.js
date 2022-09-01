import './App.css';
import { useState } from 'react';

function App() {

    const [text,setText]= useState("")
    const [todos,setTodo]= useState([
   
    ]);
    
    
    const addTodo=()=> {
      const newArr=[ ...todos, {id: todos.length+1,text:text}];
      setTodo(newArr)
      setText("");
    };

    const deleteTodo=(id)=>{
      const newArr = todos.filter((item)=> item.id !== id);
      setTodo(newArr);
    }   

  
    return (
      <div className="app">
        < div className="container">
        <h1>What's the plan for today?</h1>
        <input onChange={(e)=>setText(e.target.value)} value={text}/>
        <button onClick={()=> addTodo()}>add Todo</button>
    
  
        {todos.map((item) =>(
          <div className='prop' key={item.id} style={{backgroundColor:""}}>
            <div>
            <p>{item.text}</p></div>
            <div className='footer'>
             <button onClick={deleteTodo}>delite</button>
             <button>edit</button>
          
            </div>
            </div>
        ))}

        </div>
        </div>
        )
  };


export default App;
