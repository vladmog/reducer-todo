export const initialState = {
    todos: [
        {item: 'Learn about reducers',
        completed: false,
        id: 3892987589
        },
    ]
  };

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const newTodo = {
                name: action.payload,
                id: Math.random(),
                completed: false
            }
            return {
                ...state,
                todos: [...todos, newTodo]
            }
        default:
            return state;
    }
};