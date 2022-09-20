import React from "react";
import { Card,styled,Stack, Typography,Button, CardContent } from "@mui/material";
import { Container } from "@mui/system";

//wraps stat card
const SCard = styled(Card)({
    height:"260px",
    width:"240px",
    borderRadius:"26px",
})

//StatCard
export default function StatCard(){
    return(
        <Container>
            <SCard>
                <CardContent>
                    <Stack spacing={2}>
                        <Typography variant="h6" color={"black"} textAlign={"center"}>Upcoming Updates</Typography>
                        <Typography variant="h8" color={"gray"} textAlign={"center"}>UI Fixes</Typography>
                        <Typography variant="h8" color={"gray"} textAlign={"center"}>Accounts</Typography>
                        <Typography variant="h8" color={"gray"} textAlign={"center"}>w/JWT</Typography>
                        <Typography variant="h8" color={"gray"} textAlign={"center"}>w/Google OAuth</Typography>
                        <Typography variant="h8" color={"gray"} textAlign={"center"}>RoadMaps</Typography>
                    </Stack>
                </CardContent>
                
            </SCard>
        </Container>
    )
}