import { useState } from 'react'
import {Form} from './Form'

function App() {
    const [todos, setTodos]=useState([]);

    
    function todoAdd(title){
	    setTodos(currentTodos=>[...currentTodos, {id:crypto.randomUUID(), title, completed:false}])
	}

    

    function toogle(id, completed){

	setTodos(currentTodos=>{
	    return currentTodos.map(todo=>{
		if (todo.id==id){
		    return {...todo, completed}
		}
		return todo
	    })
	})
    }
    
    function deleteTodo(id){
	setTodos(currentTodos=>{
	    return currentTodos.filter(todo=>todo.id!==id)
	})
    }
  return (
      <>
	  console.log(1)
	<Form addTodo={todoAdd}/>
	  console.log(2)
	<h1>Todo list</h1>
	{todos.length === 0 && "No todos"}
		<ul>
		    {todos.map(todo=>{
			return (<li key={todo.id}>
			    <label>
				<input type="checkbox" checked={todo.completed} onChange={evt=>toogle(todo.id, evt.target.checked)}/>
				{todo.title}
			    </label>
				<button onClick={()=>deleteTodo(todo.id)}>delete</button>    
			    
				</li>)})}
		    
		</ul>
		
    </>
  )
}


export default App;
