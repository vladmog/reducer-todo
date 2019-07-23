import React, { useReducer } from 'react';
import logo from './logo.svg';

import { reducer, initialState } from './reducers/reducer'

import './App.css';
import Todos from './components/Todos';
import Form from './components/Form';

function App() {
  // const [state, dispatch] = useReducer(reducer, initialState)
  // console.log(state) -> todos: []
  
  const [{todos}, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      <Todos todos = {todos} />
      <Form />
    </div>
  );
}

export default App;
