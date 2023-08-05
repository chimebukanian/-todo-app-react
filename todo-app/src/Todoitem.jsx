export default function Todoitem({toogle, del, completed, id, title}){
    
    return (
	<li>
                <label>
                    <input type="checkbox" checked={completed} onChange={evt=>toogle(id, evt.target.checked)}/>
                    {title}
                </label>
                <button onClick={()=>del(id)}>delete</button>

        </li>)
}
