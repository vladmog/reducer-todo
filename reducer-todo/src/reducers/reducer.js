export const initialState = {
    todos: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
        },
    ]
  };

export const reducer = (state, action) => {
    console.log("reducer trig")
    switch (action.type) {
        case "ADD_TODO":
            const newTodo = {
                item: action.payload,
                id: new Date(),
                completed: false
            }
            return {
                ...state,
                todos: [...state.todos, newTodo]
            }
        case "TOGGLE_TODO":
            console.log("toggle trig")
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