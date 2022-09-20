import React from "react";
import {Button,Card,CardActions,styled, Stack,} from "@mui/material";
import { Container} from "@mui/system";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import GolfCourseOutlinedIcon from '@mui/icons-material/GolfCourseOutlined';
import { useNavigate } from "react-router-dom";

//Buttons in Action card
const TaskButton = styled(Button)({
    background:"transparent",
    color: "#858585",
    "&:hover":{
        color: "#5030E5"
    },
    textTransform: "none",
    size:"regular",
})

//Using TaskCard as action card background
const TaskCard = styled(Card)({
    height:"250px",
    width:"240px",
    borderRadius:"26px",
    marginBottom:"20px"
})

//Means of Primary navigation for the user
export default function ActionCard(){

    let navigate = useNavigate();

    //Colour of the button changes based on /what tab user is in
    function determineColourT(){
        if (window.location.pathname === "/tasks") return "#5030E5"
        return "#858585"
    }
    function determineColourS(){
        if (window.location.pathname === "/connections") return "#5030E5"
        return "#858585"
    }
    function determineColourC(){
        if (window.location.pathname === "/courses") return "#5030E5"
        return "#858585"
    }
    function determineColourR(){
        if (window.location.pathname === "/roadmap") return "#5030E5"
        return "#858585"
    }

    return (
        <Container>
            <TaskCard >
                <CardActions>
                    <Container>
                    <Stack spacing={2}>
                        <TaskButton sx={{color:determineColourS()}} onClick={()=>{
                            navigate("/connections")
                        }} startIcon={<CalendarMonthOutlinedIcon/>}>Connections</TaskButton>
                        <TaskButton sx={{color:determineColourT()}} onClick={()=>{
                            navigate("/tasks")
                        }} startIcon={<ListOutlinedIcon/>}>Tasks</TaskButton>
                        <TaskButton sx={{color:determineColourC()}} onClick={()=>{
                            navigate("/courses")
                        }} startIcon={<LibraryBooksOutlinedIcon/>}>Courses</TaskButton>
                        <TaskButton sx={{color:determineColourR()}} onClick={()=>{
                            navigate("/roadmap")
                        }} startIcon={<GolfCourseOutlinedIcon/>}>RoadMap</TaskButton>
                    </Stack>
                    </Container>
                </CardActions>
            </TaskCard>
        </Container>
    )
}