import { ADD_TODO } from "./type";

export const addTodoAction = todo => dispatch => {
    dispatch({
        type: ADD_TODO,
        payload: todo
    })
}