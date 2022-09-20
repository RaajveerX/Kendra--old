import React from "react";
import { Typography,Grid, CardContent,CardActions } from "@mui/material";
import { Stack,Box } from "@mui/system";
import { Card,IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from "react-redux";
import { deleteCourse } from "../../actions/courses";

//both props are used to manage update function for courses
export default function CourseCard({course,setCurrentId}){
    
    const dispatch = useDispatch();
    return (
        <CardActions sx={{width:"250px", borderRadius:"26px"}}>
            <Card elevation={2} sx={{bgcolor:"white",width:"250px", borderRadius:"26px"}} >
                <CardContent>
                    <Grid container>

                        <Grid item xs={10}>
                            <Stack spacing={1}>
                                <Box>
                                    <Typography variant="h5" >{course.name}</Typography>
                                </Box>
                                <Typography variant="h7">{course.section}</Typography>
                                <Typography variant="h7">{course.instructor}</Typography>
                                <Typography variant="h7">{course.room}</Typography>
                                <Typography variant="h7">{course.time}</Typography>
                            </Stack>
                        </Grid>

                        <Grid item xs={2}>
                            <IconButton 
                            size="small"
                            sx={{color:"#FF4646"}}
                            onClick={()=>dispatch(deleteCourse(course._id))}>
                                <RemoveCircleOutlineIcon/>
                            </IconButton>

                            <IconButton size="small"
                            sx={{color:"#0075FF"}}
                            onClick={()=>setCurrentId(course._id)}>
                                <EditIcon/>
                            </IconButton>
                        </Grid>

                    </Grid>
                </CardContent>
            </Card>
    </CardActions>
    )
}