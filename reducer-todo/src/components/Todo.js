import React from 'react';

function Todo(props) {
    console.log(props.todo)

    const toggle = () => {
        props.dispatch({type: "TOGGLE_TODO", payload: props.todo.id})
    }
    return (
        <div>
            <h1 
                onClick = {toggle}
                className = {props.todo.completed ? "toggleCompleted" : ""}
            >{props.todo.item}</h1>
        </div>
    )
}

export default Todo;