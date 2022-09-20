//Reducer for courses sub-app

export default (courses = [],action) => {
    switch (action.type) {

        case 'UPDATE_COURSE':
        case 'DELETE_COURSE':
            return courses.filter((course)=> (course._id != action.payload));
        case 'FETCH_COURSES':
            return action.payload;
        case 'CREATE_COURSE':
            return [...courses, action.payload];
        default:
            return courses;
    }
}
