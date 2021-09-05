import ACTION_TYPES from './actionTypes';

export const addTask = (values) => ({
    type: ACTION_TYPES.ADD_TASK,
    values,
}); 

export const deleteTodo = (index) => ({
    type: ACTION_TYPES.DELETE_TASK, index,
});