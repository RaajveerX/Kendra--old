import React from "react";
import { Canvas } from "../Canvas";
import { Typography,Grid,Box} from "@mui/material";
import { useSelector } from "react-redux";
import ConnectionInput from "./ConnectionInput";
import ConnectionCard from "./ConnectionCard";

const BoxProperties = 
{display:"flex", 
flexDirection:"row", 
flexWrap:"wrap", 
justifyContent:"flex-start",
alignContent:"flex-start",
padding:"80px"}

//All main sub-apps use a Common Canvas (imported above)

//Main landing page for connections sub-app
export default function Landing(){

    //Extract all connectiosn from global state
    const connections = useSelector((state)=>state.connections)
    return (
        <Canvas>
            <Grid container direction={"column"} alignItems={"center"} justifyItems={"center"} spacing={2}>

                <Grid item xs={12}><Typography variant="h4" paddingTop={3}>Connections</Typography></Grid>

                <Grid item xs={12}><Typography variant="h6" paddingTop={3} sx={{color:"gray"}}>
                    Connect all web apps that help you get through school</Typography></Grid>

                <Grid item xs={12} marginTop={3}>
                    <ConnectionInput/>
                </Grid>

                <Grid item container xs={12} spacing={2} >
                    <Box sx={BoxProperties}>
                        {connections.map((connection)=>(
                        <ConnectionCard key={connection._id} conn={connection}/>
                        ))}
                    </Box>
                </Grid>
                
            </Grid>
        </Canvas>
    )
}