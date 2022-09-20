import { CardContent,TextField,Stack,styled } from "@mui/material"
import { NFab } from "../Fab"
import { useEffect, useState } from "react"
import { createCourse,updateCourse } from "../../actions/courses"
import { useDispatch,useSelector } from "react-redux"
import AddIcon from '@mui/icons-material/Add';
import { Card } from "@mui/material"

//Course input card
const CourseArea = styled(Card)({
    backgroundColor:"#white",
    width:"95%",
    height:"70px",
    boxShadow:"none",
    padding:"none",
    marginLeft:"30px",
    marginTop:"0",
    marginBottom:"0",
    marginRight:"30px",    
    borderRadius:"26px",
})

//Displays, Handles input fields
//both props manage edit function for courses
export default function CourseInput({currentId,setCurrentId}){

    const dispatch= useDispatch();

    //setting course object state
    const [courseData, setCourseData] = useState({
        name:"",
        section:"",
        instructor:"",
        room:"",
        time:""
    })
    
    //currentId prop used to extract the specific post being edited
    const course = useSelector((state)=> currentId? state.courses.find((c)=>c._id === currentId):null);

    //Tracks changes in course ( used when edits are made )
    useEffect(()=>{
        if(course) setCourseData(course);
    },[course])
    
    //handles form submission
    const handleSubmit = (e)=>{
        e.preventDefault();

        //if currentId is populated, user is editing course
        if(currentId){
            dispatch(updateCourse(currentId,courseData))
        }
        else{
            dispatch(createCourse({...courseData}))
        }
        //clears form once done
        clear();
    }

    //clears form
    const clear = () => {
        setCurrentId(null);
        setCourseData({
            name:"",
            section:"",
            instructor:"",
            room:"",
            time:""
        })
    }

    return (
        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <NFab variant="extended" type="submit"><AddIcon/>{currentId ? 'EditCourse': 'AddCourse'}</NFab>
            <CourseArea variant="outlined">
                <CardContent>
                    <Stack spacing={.5} direction={"row"}>
                        <TextField size="small" label="ClassName" 
                        value={courseData.name}
                        onChange={(e)=>setCourseData({...courseData,name:e.target.value})}/>

                        <TextField size="small" label="Section"
                        value={courseData.section}
                        onChange={(e)=>setCourseData({...courseData,section:e.target.value})}/>

                        <TextField size="small" label="Instructor"
                        value={courseData.instructor}
                        onChange={(e)=>setCourseData({...courseData,instructor:e.target.value})}/>

                        <TextField size="small" label="Room"
                        value={courseData.room}
                        onChange={(e)=>setCourseData({...courseData,room:e.target.value})}/>

                        <TextField size="small" label="Time"
                        value={courseData.time}
                        onChange={(e)=>setCourseData({...courseData,time:e.target.value})}/>
                    </Stack>
                </CardContent>
            </CourseArea>
        </form>
    )
}