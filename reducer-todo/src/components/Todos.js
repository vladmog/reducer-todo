import React from 'react';
import Todo from './Todo';

function Todos(props) {
    return (
        <div>
            {props.todos.map(todo => {
                return (
                <Todo key = {Math.random()} todo = {todo} />
            )})}
        </div>
    )
}

export default Todos;