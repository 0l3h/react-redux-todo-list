import ACTION_TYPES from './../actions/actionTypes';

const initialState = {
    tasks: [],
}

export default function todoReducer(state = initialState, action) {
    const {values, type, index} = action;
    
    switch (type) {
        case ACTION_TYPES.ADD_TASK: {
            return {tasks: [...state.tasks, values]}
        }
        case ACTION_TYPES.DELETE_TASK: {
            state.tasks.splice(index, 1);
            return {tasks: [...state.tasks]}
        }
        default:
            return state;
    }
}
