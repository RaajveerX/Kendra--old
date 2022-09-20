import React from "react"
import { Stack,Box,styled, Card, CardContent, Typography,IconButton } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from "react-redux";
import { deleteTask } from "../../actions/tasks";
import moment from "moment";
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';

//Card wrapping all tasks displayed
const TaskArea = styled(Card)({
    backgroundColor:"white",
    width:"100%",
    height:"70px",
    marginLeft:"30px",
    marginRight:"30px",
    padding:"0",
    marginTop:"0",
    marginBottom:"0",
    borderRadius:"26px",
})

//props: taskPost (task itself)
export default function Task(props){

    const dispatch = useDispatch();

    return (
        <TaskArea variant="outlined">
            <CardContent>
                <Stack direction={"row"} spacing={1}>
                    <Box sx={{width:"500px",height:"40px"}}>
                        <Typography>{props.taskPost.name}</Typography>
                    </Box>

                    <Box sx={{width:"150px",height:"40px"}}>
                        <Typography>{moment(props.taskPost.due).format('YYYY-MM-DD')}</Typography>
                    </Box>

                    <Box sx={{width:"150px",height:"40px"}}>
                        <Typography>{moment(props.taskPost.due).format('h:mm a')}</Typography>
                    </Box>

                    <Box sx={{width:"160px",height:"40px"}}>
                        <Stack direction={"row"} spacing={1} justifyContent={"center"}>

                        <IconButton 
                        aria-label="delete" 
                        size="regular" 
                        sx={{color:"#FF4646"}} 
                        onClick={ ()=> dispatch(deleteTask(props.taskPost._id))}>
                        <DoneOutlineIcon fontSize="inherit"/>
                        </IconButton>

                        <IconButton aria-label="edit" size="regular" sx={{color:"#0075FF"}} 
                        onClick={()=>props.setCurrentId(props.taskPost._id)}>
                            <EditIcon fontSize="inherit"/>
                        </IconButton>
                        </Stack>
                    </Box>
                </Stack>
            </CardContent>
        </TaskArea>
    )
}
