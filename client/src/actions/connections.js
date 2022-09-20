import * as api from '../api';

//Actions required for connection sub-app
//These actions are called later in their corresponding components
export const getConnections = () => async (dispatch) => {
    try {
        const {data} = await api.fetchConnections();
        dispatch({type:'FETCH_CONNS',payload: data});
    } catch (error) {
        console.log(error.message)
    }
}

export const createConnection = (connection) => async (dispatch) => {
    try {
        const {data} = await api.createConnection(connection)
        dispatch({type:'CREATE_CONN',payload:data})
    } catch (error) {
        console.log(error.message)
    }
}

export const deleteConnection = (id) => async (dispatch) => {
    try {
        await api.deleteConnection(id)
        dispatch({type:'DELETE_CONN', payload:id})
    } catch (error) {
        console.log(error.message)
    }
}

export const updateConnection = (id,connection) => async (dispatch) => {
    try {
        const {data} = await api.updateConnection(id,connection);
        dispatch({type:'UPDATE_CONN',payload:data})
    } catch (error) {
        console.log(error.message)
    }
}