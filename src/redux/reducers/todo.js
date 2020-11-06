import { ADD_TODO } from "../actions/type";

const initialState = {
    todoList: []
};

const reducers = (state=initialState,action) => {
    switch(action.type) {
        case ADD_TODO:
            return {
                ...state,
                todoList: [action.payload,...state.todoList]
            };
        default:
            return state;
    };
};

export default reducers;