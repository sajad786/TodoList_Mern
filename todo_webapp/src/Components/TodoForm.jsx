import { useState } from "react"
import actions from '../redux/actions'
const TodoForm  = () => {
    const [text, SetText] = useState('')

    const onformSubmit = (e) => {
        e.preventDefault();
        actions.addNewTodo(text)
        SetText('')
    }

    const oninputChange = (e) =>{
        SetText(e?.target?.value)   
    }

    return(
        <form className="TodoForm" onSubmit={onformSubmit} >
            <input 
            className="input"
             placeholder="Enter new Todo..."
             onChange={oninputChange}
             value={text}
            />
        </form>
    )
}

export default TodoForm;