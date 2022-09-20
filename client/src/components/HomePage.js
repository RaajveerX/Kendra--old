import { CardActionArea, CardContent, Grid, Typography } from "@mui/material";
import { Canvas } from "./Canvas";
import { Card } from "@mui/material";
import ConnectionArt from '../resources/Connections.svg'
import TaskArt from '../resources/Tasks.svg'
import CourseArt from '../resources/Courses.svg'
import { Stack } from "@mui/system";
import RoadMapArt from '../resources/Goals.svg'
import { useNavigate } from "react-router-dom";

//Generates a Card based on sub-app and image to be displayed
function GenerateCard({img,func}){
    let navigate = useNavigate();
    return(
            <CardActionArea sx={{width:"300px",height:"300px",borderRadius:"26px"}} onClick={()=>navigate(`/${func}`)}>
                <Card  elevation={"none"}>
                    <CardContent>
                        <Stack spacing={1} >
                            <img src={img} height={"90%"} width={"90%"}/>
                            <Typography variant="h6" textAlign={"center"}>{func}</Typography>
                        </Stack>
                    </CardContent>
                </Card>
            </CardActionArea>
    )
}

const canvasProps = {display:"flex", justifyContent:"center",alignContent:"center", verticalAlign:"middle"}

//HomePage
export default function HomePage(){

    return(
        <Canvas sx={canvasProps}>
            <CardContent>
                <Stack direction={"row"} spacing={50} marginTop={"5%"}>
                    <Stack>
                        <GenerateCard img={ConnectionArt} func={"Connections"}/>
                        <GenerateCard img={TaskArt} func={"Tasks"}/>
                    </Stack>
                    <Stack>
                        <GenerateCard img={CourseArt} func={"Courses"}/>
                        <GenerateCard img={RoadMapArt} func={"RoadMap"}/>
                    </Stack>
                </Stack>
            </CardContent>
        </Canvas>
    )
}