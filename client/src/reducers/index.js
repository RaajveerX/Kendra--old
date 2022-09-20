import { combineReducers } from "redux";
import tasks from './tasks'
import courses from "./courses";
import connections from "./connections";

//Combining all three reducers
export default combineReducers({tasks,courses,connections});