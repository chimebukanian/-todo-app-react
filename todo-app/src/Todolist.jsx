import Todoitem from './Todoitem'

export default function Todolist({todos, toogle, del}){

    return (
	<Todoitem key={todo.id} todos={todos} toogle={toogle} del={del}/>

    )
}
