import { styled } from "@mui/material"
import { Fab } from "@mui/material"

//Primary Action Button for Each sub-app
export const NFab = styled(Fab)({
    textTransform:"none",
    backgroundColor:"white",
    fontWeight:"bold",
    padding:"15px",
    margin:"15px",
    marginLeft:"50px",
    boxShadow:"none",
    "&hover":{

        backgroundColor:"black"
    },
    color: "black",
    border:"1px solid",
    borderColor:"black"
})
