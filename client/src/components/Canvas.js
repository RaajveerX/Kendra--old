import { Card,styled } from "@mui/material"


//Common Canvas used across all sub-apps
export const Canvas = styled(Card)({
    width: window.innerWidth - 320,
    height: window.innerHeight - 110,
    borderRadius:"26px",
})