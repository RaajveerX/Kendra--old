import { CardContent, Typography } from "@mui/material";
import { Canvas } from "./Canvas";
import ErrorArt from '../resources/Error.svg'
import { Stack } from "@mui/system";


//Error Page Not Found
export default function ErrorPage(){
    return(
        <Canvas>
            <CardContent>
                <Stack 
                justifyContent={"center"} 
                display={"flex"} 
                alignItems={"center"} 
                justifyItems={"center"} > 

                <img src={ErrorArt} height="500px" width="500px"/>
                <Typography variant="h5" color={"gray"}>Incorrect URL</Typography>
                
                </Stack>
            </CardContent>
        </Canvas>
    )
}