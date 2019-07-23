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
    dispatch({type: "ADD_TODO", payload: todo})
  }
  const clearTodos = () => {
    dispatch({type: "CLEAR_COMPLETED"})
  }

  return (
    <div className="App">
      <Form addTodo = {addTodo} />
      <button onClick = {clearTodos}>Clear</button>
      <Todos todos = {todos} dispatch = {dispatch} />
    </div>
  );
}

export default App;
