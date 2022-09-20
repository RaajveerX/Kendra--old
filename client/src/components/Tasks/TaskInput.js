import React,{useState,useEffect} from "react"
import { Stack,Box,styled, CardContent, TextField,IconButton} from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from "react-redux";
import { createTask,updateTask } from "../../actions/tasks";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { TimePicker } from "@mui/x-date-pickers";
import { useSelector } from "react-redux";
import { NFab } from "../Fab";
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { Card } from "@mui/material";

//Card wrapping input component for tasks
const TaskArea = styled(Card)({
    backgroundColor:"white",
    width:"95%",
    height:"70px",
    padding:"none",
    marginLeft:"30px",
    marginTop:"0",
    marginBottom:"0",
    marginRight:"30px",    
    borderRadius:"26px",
})

//Displays, Handles input fields for tasks
//both props manage edit function
export default function TaskInput({currentId, setCurrentId}){

    //setting task object state
    const [taskData, setTaskData] = useState({
        name:"",completed:"false",due:new Date(),time:""
    });

    //this hook is associated with the date and time pickers
    //stores date along with time
    const [value, setValue] = React.useState(new Date());

    //populates state for date and time pickers
    const handleChange = (newValue) => {
        setValue(newValue);
    };

    //using the currentId prop to get the task being edited by the user
    const task = useSelector((state)=> currentId? state.tasks.find((t)=> t._id === currentId): null);
    
    //Displays,manages the date and time pickers
    function MaterialUIPickers() {    
        return (
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack spacing={1} direction={"row"}>
                <DesktopDatePicker
                  label="Due"
                  inputFormat="MM/dd/yyyy"
                  value={value}
                  onChange={handleChange}
                  renderInput={(params) => <TextField size="small"{...params} />}
                />
                <TimePicker
                  label="Time"
                  value={value}
                  onChange={handleChange}
                  renderInput={(params) => <TextField size="small" {...params} />}
                />
              </Stack>
            </LocalizationProvider>
    )}

    const dispatch = useDispatch();

    //tracks changes made when user edits a task
    useEffect(()=>{
        if (task) setTaskData(task);
    }, [task])

    //handles form submit
    const handleSubmit =  (e)=>{
        e.preventDefault();

        //if currentId is populated, user is editing a task
        if (currentId){
            dispatch(updateTask(currentId,{...taskData,due:value}))
        }
        else {
            dispatch(createTask({...taskData, due:value}))
        }
        //clear form
        clear();
    }

    //clears form
    const clear = () => {
        setCurrentId(null);
        setTaskData({
            name:"",completed:"false",due:new Date(),time:""
        })
    }

    return (
        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <NFab variant="extended" type="submit"><AddIcon/>{currentId ? 'EditTask': 'AddTask'}</NFab>
            <TaskArea variant="outlined">
                <CardContent>
                    <Stack direction={"row"} spacing={1}>
                        <Box sx={{width:"500px",height:"40px",bgcolor:"none"}}>
                            <TextField 
                            name="name"
                            variant="standard" 
                            fullWidth 
                            value={taskData.name}
                            onChange={(e)=>setTaskData({...taskData,name:e.target.value})}
                            />
                        </Box>

                        <Box sx={{width:"350px",height:"40px",bgcolor:"none"}}>
                            <MaterialUIPickers/>
                        </Box>
                        
                        <Box sx={{width:"160px",height:"40px",bgcolor:"none"}}>
                            <Stack direction={"row"} spacing={1} justifyContent={"center"}>
                            <IconButton disabled aria-label="delete" size="regular" sx={{color:"red"}}>
                                <DoneOutlineIcon fontSize="inherit"/>
                            </IconButton>
                            <IconButton disabled aria-label="edit" size="regular" sx={{color:"blue"}}>
                                <EditIcon fontSize="inherit" />
                            </IconButton>
                            </Stack>
                        </Box>
                    </Stack>
                </CardContent>
            </TaskArea>
        </form>
    )
}