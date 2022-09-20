//Reducer for tasks sub-app

export default (tasks = [],action) => {
    switch (action.type) {

        case 'UPDATE_TASK':
        case 'DELETE_TASK':
            return tasks.filter((task)=> (task._id !== action.payload));
        case 'FETCH_TASKS':
            return action.payload;
        case 'CREATE_TASK':
            return [...tasks, action.payload];
        default:
            return tasks;
    }
}
