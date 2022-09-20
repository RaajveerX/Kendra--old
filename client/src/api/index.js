import axios from 'axios';

//Connection to Backend hosted on heroku
const murl = "https://kendraapi.herokuapp.com/api"
const url = `${murl}/tasks`
const courseurl = `${murl}/courses`
const connectionurl = `${murl}/connections`

//Axios API Calls For Task sub app
export const fetchTasks = () => axios.get(url);
export const createTask = (newTask) => axios.post(url,newTask);
export const deleteTask = (id) => axios.delete(`${url}/${id}`);
export const updateTask = (id,updatedTask) => axios.patch(`${url}/${id}`,updatedTask);

//Axios API Calls For Course sub app
export const fetchCourses = () => axios.get(courseurl);
export const createCourse = (newCourse) => axios.post(courseurl,newCourse);
export const deleteCourse = (id) => axios.delete(`${courseurl}/${id}`);
export const updateCourse = (id, updatedCourse) => axios.patch(`${courseurl}/${id}`, updatedCourse);

//Axios API Calls For Connection sub app
export const fetchConnections = () => axios.get(connectionurl);
export const createConnection = (newConnection) => axios.post(connectionurl,newConnection);
export const deleteConnection = (id) => axios.delete(`${connectionurl}/${id}`);
export const updateConnection = (id, updatedConnection) => axios.patch(`${connectionurl}/${id}`, updatedConnection);

