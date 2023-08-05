import { useEffect, useState } from 'react'
import Form from './Form'
import Todolist from './Todolist'

function App() {
    const [todos, setTodos]=useState(()=>{
		const localTodos=localStorage.getItem("TODOS")
		if (localTodos==null) return []

		return JSON.parse(localTodos)
})

	useEffect(()=>{
		localStorage.setItem("TODOS", JSON.stringify(todos))
	}, [todos])

    
    function todoAdd(title){
	    setTodos(currentTodos=>[...currentTodos, {id:crypto.randomUUID(), title, completed:false}])
	}
    
    function toogleTodo(id, completed){
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
	  
	<Form addTodo={todoAdd}/>
	  
	<h1>Todo list</h1>
	  <Todolist toogle={toogleTodo} del={deleteTodo} todos={todos} />
    </>
  )
}


export default App;
