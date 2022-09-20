import * as api from '../api';

//Actions required for courses sub-app
//These actions are called later in their corresponding components
export const getCourses = () => async (dispatch) => {
    try {
        const {data} = await api.fetchCourses();
        dispatch({type:'FETCH_COURSES',payload: data.allCourses});
    } catch (error) {
        console.log(error.message)
    }
}

export const createCourse = (course) => async (dispatch) => {
    try {
        const {data} = await api.createCourse(course)
        dispatch({type:'CREATE_COURSE',payload:data})
    } catch (error) {
        console.log(error.message)
    }
}

export const deleteCourse = (id) => async (dispatch) => {
    try {
        await api.deleteCourse(id)
        dispatch({type:'DELETE_COURSE', payload:id})
    } catch (error) {
        console.log(error.message)
    }
}

export const updateCourse = (id,course) => async (dispatch) => {
    try {
        const {data} = await api.updateCourse(id,course);
        dispatch({type:'UPDATE_COURSE',payload:data})
    } catch (error) {
        console.log(error.message)
    }
}