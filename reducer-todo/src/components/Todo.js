import React from 'react';

function Todo(props) {
    console.log(props.todo)
    return (
        <div>
            <h1>{props.todo.item}</h1>
        </div>
    )
}

export default Todo;