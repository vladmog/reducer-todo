import React, {useState} from 'react';

function Form(props) {
    const [todo, setTodo] = useState("")
    const handleChange = (e) => {
        setTodo(e.target.value)
    }
    const submitTodo = (e) => {
        e.preventDefault()
        props.addTodo(todo)
    }
    return (
        <div>
            <form onSubmit = {submitTodo}>
                <input 
                    name = "todo" 
                    value = {todo}
                    onChange = {handleChange}
                    placeholder = "New todo"
                />
                <button onClick= {submitTodo}>Add</button>
            </form>
        </div>
    )
}

export default Form;