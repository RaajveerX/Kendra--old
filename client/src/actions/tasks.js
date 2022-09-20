import * as api from '../api';

//Actions required for tasks sub-app
//These actions are called later in their corresponding components
export const getTasks = () => async (dispatch)=>{

    try {
        const {data} = await api.fetchTasks();
        dispatch({type:'FETCH_TASKS', payload: data.allTasks})
    } catch (error) {
        console.log(error.message)
    }
}

export const createTask = (task) => async (dispatch) => {
    try {
        const {data} = await api.createTask(task)
        dispatch({type:'CREATE_TASK',payload:data})
    } catch (error) {
        console.log(error.message)
    }
}


export const deleteTask = (id) => async (dispatch)=>{
    try {
        await api.deleteTask(id);
        dispatch({type:'DELETE_TASK',payload:id})
    } catch (error) {
        console.log(error)
    }
}
export const updateTask = (id,Task) => async ( dispatch) => {
    try {
        const {data} = await api.updateTask(id,Task);
        dispatch({type:'UPDATE_TASK',payload:data})

    } catch (error) {
        console.log(error)
    }
}




