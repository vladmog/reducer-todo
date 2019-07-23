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
    console.log("reducer ran")
    switch (action.type) {
        case "ADD_TODO":
            console.log("SUBMIT p3")
            const newTodo = {
                item: action.payload,
                id: new Date(),
                completed: false
            }
            return {
                ...state,
                todos: [...state.todos, newTodo]
            }
        default:
            return state;
    }
};