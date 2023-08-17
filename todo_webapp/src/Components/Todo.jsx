import { useState } from "react";
import { deleteTodo, toggleTodo, updateTodo } from "../redux/actions/todos";

const Todo = ({todo}) => {

    const [editing, setEditing] = useState(false);
    const [text, setText] = useState(todo?.data);

    // const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();

        setEditing(prevState => !prevState);

       updateTodo(todo._id, text)
    }

    const _deleteTodo = (id) => {
        deleteTodo(id)
    }
    return(
        <li
            className="task"
            // onClick={() => toggleTodo(todo._id)}
            style={{
                textDecoration: todo?.done ? 'line-through' : '',
                color: todo?.done ? '#bdc3c7' : '#34495e'
            }}
            data-testid="todo-test"
        >
            <span onClick={() => toggleTodo(todo._id)} style={{ display: editing ? 'none' : '' }}>{todo?.data}</span>

            <form
                style={{ display: editing ? 'inline' : 'none' }}
                onSubmit={onFormSubmit}
            >
                <input
                    type="text"
                    value={text}
                    className="edit-todo"
                    onChange={(e) => setText(e.target.value)}
                />
            </form>

            <span className="icon" 
            onClick={() => _deleteTodo(todo._id)}
            >
                <i className="fas fa-trash" />
            </span>
            <span className="icon" onClick={() => setEditing(prevState => !prevState)}>
                <i className="fas fa-pen" />
            </span>
        </li> 
    )
}
export default Todo;