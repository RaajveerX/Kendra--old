import React from "react";
import { Card,styled,CardContent,Typography } from "@mui/material";


//Card for Greeting users
const GCard = styled(Card)({
    backgroundColor:"transparent",
    display:"flex",
    alignContent:"center",
    justifyContent:"center",
    verticalAlign:"middle"

})

export default function GreetCard(){
    return (
        <GCard variant="default">
            <CardContent>
                <Typography variant="h5" >Welcome!</Typography>
                <Typography variant="h8" >
                    Check my progress!
                </Typography>
            </CardContent>
        </GCard>
    )
}