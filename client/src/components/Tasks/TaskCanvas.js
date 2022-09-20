import React from "react";
import { ListItem,CardContent } from "@mui/material";
import Task from "./Task";
import TaskInput from "./TaskInput";
import {useSelector} from 'react-redux'
import { List} from "@mui/material";
import { Canvas } from "../Canvas";

//All main sub-apps use a Common Canvas (imported above)
const listStyle = {maxHeight:window.innerHeight - 100, overflow:"auto",backgroundColor:"none"}

//both props used to manage edit function in tasks
export default function TaskCanvas({currentId, setCurrentId}){

    //Extracts alltasks from global state
    const tasks = useSelector((state)=> state.tasks)

    return (
        <Canvas >
            <CardContent>
                <TaskInput currentId={currentId} setCurrentId={setCurrentId}/>

                    <List  style={listStyle} >
                        {tasks.map((task)=>(
                        <ListItem key={task._id}>
                            <Task taskPost={task} setCurrentId={setCurrentId}/>
                        </ListItem>
                    ))}
                    </List>
            </CardContent>
        </Canvas>
    )
}