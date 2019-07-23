export const initialState = {
    todos: []
  };

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const newTodo = {
                item: action.payload,
                id: new Date(),
                completed: false
            }
            if (action.payload === "get pizza") {
                return {
                    ...state,
                    todos: [...state.todos, {item: "🍕", completed: false, id: 22}]
                }
            } else {
                return {
                    ...state,
                    todos: [...state.todos, newTodo]
                }
            }   
        case "TOGGLE_TODO":
            return {
                ...state,
                todos: 
                    state.todos.map(todo => {
                        if (action.payload === todo.id) {
                            return {
                                ...todo,
                                completed: !todo.completed
                            }
                        } else {
                            return todo
                        }
                    })
                
            }
        case "CLEAR_COMPLETED":
            return {
                ...state,
                todos:
                    state.todos.filter(todo => {
                        return todo.completed === false
                    })
            }
        default:
            return state;
    }
};