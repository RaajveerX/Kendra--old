import React from "react";
import { Stack } from "@mui/system";
import { CardContent, Typography } from "@mui/material";
import Goals from '../../resources/Goals.svg'
import { Canvas } from "../Canvas";

//All main sub-apps use a Common Canvas (imported above)

export default function Roadmap(){
    return (
        <Canvas>
            <CardContent>
                <Stack 
                justifyContent={"center"} 
                display={"flex"} 
                alignItems={"center"} 
                justifyItems={"center"}> 
                    <img src={Goals} height="500" width="300"/>

                    <Typography variant="h4" color={"gray"}>
                        Keep track of your academic goals
                    </Typography>

                    <Typography variant="h5" color={"gray"}>
                        Coming soon.
                    </Typography>
                </Stack>
            </CardContent>
        </Canvas> 
    )
}

