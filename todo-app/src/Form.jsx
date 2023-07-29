import { useState } from 'react'

export default function Form({addTodo}){
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