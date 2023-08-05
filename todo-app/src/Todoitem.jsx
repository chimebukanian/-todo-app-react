export default function Todoitem({toogle, del, todo}){
    
    return (
	<li>
                <label>
                    <input type="checkbox" checked={todo.completed} onChange={evt=>toogle(todo.id, evt.target.checked)}/>
                    {todo.title}
                </label>
                <button onClick={()=>del(todo.id)}>delete</button>

        </li>)
}
