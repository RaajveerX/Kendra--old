import React from "react"
import {CardContent,Grid} from "@mui/material"
import CourseCard from "./CourseCard";
import { useSelector } from "react-redux";
import CourseInput from "./CourseInput";
import { Box } from "@mui/system";
import { Canvas } from "../Canvas";

//All main sub-apps use a Common Canvas (imported above)

//both props are used to manage edit function for Courses
export default function CourseCanvas({currentId,setCurrentId}){

    //Extract courses from global state
    const courses = useSelector((state)=> state.courses)

    return(
        <Canvas>
            <Box maxHeight={window.innerHeight-110} overflow={"auto"}>
            <CardContent>
                <CourseInput currentId={currentId} setCurrentId={setCurrentId}/>

                <Grid container direction={"row"} paddingLeft={3} paddingTop={3}  overflow={"scroll"}>
                {courses.map((course)=>(
                <Grid key={course._id} item xs={3}>
                    <CourseCard course={course} setCurrentId={setCurrentId}/>
                </Grid>))}

                </Grid>
            </CardContent>
            </Box>
        </Canvas>
    )
}