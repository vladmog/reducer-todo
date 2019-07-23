import React, { useReducer } from 'react';

import { reducer, initialState } from './reducers/reducer'

import './App.css';
import Todos from './components/Todos';
import Form from './components/Form';

function App() {
  // const [state, dispatch] = useReducer(reducer, initialState)
  // console.log(state) -> todos: []

  const [{todos}, dispatch] = useReducer(reducer, initialState)
  const addTodo = (todo) => {
    console.log("SUBMIT P2")
    dispatch({type: "ADD_TODO", payload: todo})
  }

  return (
    <div className="App">
      <Form addTodo = {addTodo} />
      <Todos todos = {todos} />
      
    </div>
  );
}

export default App;
