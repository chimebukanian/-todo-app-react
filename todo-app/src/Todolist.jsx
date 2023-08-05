import Todoitem from './Todoitem'

export default function Todolist({todos, toogle, del}){
    
    return (
        <ul>
            {todos.length===0 && "no todos"}
            {todos.map(todo => <Todoitem key={todo.id} {...todo} toogle={toogle} del={del}/>)}
        </ul>
    )
   
}