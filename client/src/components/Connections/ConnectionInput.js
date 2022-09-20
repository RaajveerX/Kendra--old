import { styled,Card,CardActions,Stack,Button,TextField } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import { createConnection } from "../../actions/connections";
import { useDispatch } from "react-redux";

const ConnectionArea = styled(Card)({
    backgroundColor:"white",
    width:window.innerWidth-450,
    height:"70px",
    marginLeft:"30px",
    marginRight:"30px",
    paddingLeft:"10px",
    marginTop:"0",
    marginBottom:"0",
    borderRadius:"26px",
    verticalAlign:"middle"
})

export default function ConnectionInput(){

    const dispatch = useDispatch();

    //Used to track new connection object created
    const [connectionData,setConnectionData] = useState({
        tag:"",url:""
    })

    //handles form submission and clears the form once connection created
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(createConnection({...connectionData}))
        clear()
    }

    //clears form
    const clear = () => {
        setConnectionData({
            tag:"",url:""
        })
    }

    //Handles Input,Displays Input Fields
    return(
        <ConnectionArea variant="outlined">
        <CardActions>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Stack spacing={5} direction={"row"}>
                    <Button 
                    sx={{ height:"50px",marginTop:"2px"}} 
                    type="submit"> <AddIcon sx={{color:"#5030E5"}}/> 
                    </Button>

                    <TextField 
                    label="Enter tag" 
                    sx={{width:"200px"}} 
                    value={connectionData.tag}
                    onChange={(e)=>setConnectionData({...connectionData,tag:e.target.value})}/>

                    <TextField 
                    label="Enter URL" 
                    sx={{width:"600px"}} 
                    value={connectionData.url}
                    onChange={(e)=>setConnectionData({...connectionData,url:e.target.value})}/>
                </Stack>
            </form>
        </CardActions>
    </ConnectionArea> 
    )
}