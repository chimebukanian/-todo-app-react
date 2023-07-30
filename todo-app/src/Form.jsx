import { useState } from 'react'

function Form({addTodo}){
    const [newItem, setNewItem]=useState("");
    function handleSubmit(e){
        e.preventDefault()
        addTodo(newItem)
        setNewItem("")
    }
    
    return (
	<form onSubmit={handleSubmit}>
            <label htmlFor="item">new item</label>
            <input type="text" id="item" value={newItem} onChange={e=>setNewItem(e.target.value)}/>
            <button type="submit">add</button>
        </form>
    )
}
export default Form;