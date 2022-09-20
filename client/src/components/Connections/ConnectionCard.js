import { Button,CardActions,IconButton,styled,Card } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from "react-redux";
import { deleteConnection } from "../../actions/connections";

//URL Button
const CButton = styled(Button)({
    backgroundColor:"white",
    borderRadius:"40px",
    marginRight:"10px",
    borderColor:"black",
    textTransform:"none",
    color:"black",
    padding:"30px",
})

//Card wrapping URL Button
const OuterCard = styled(Card)({
    boxShadow:"5",
    borderRadius:"40px",
    marginRight:"20px",
})

//ConnectionCard component that displays when a new card is added
//conn: Connection object with all the data ( as prop )
export default function ConnectionCard({conn}){
    const dispatch = useDispatch();
    return (
        <OuterCard>
            <CardActions>
                <CButton variant="outlined" onClick={()=>window.open(conn.url)}>{conn.tag}</CButton>
                
                <IconButton sx={{color:"#FF4646"}} 
                onClick={()=>dispatch(deleteConnection(conn._id))}><DeleteIcon/></IconButton>
            </CardActions>
        </OuterCard>
    )
}