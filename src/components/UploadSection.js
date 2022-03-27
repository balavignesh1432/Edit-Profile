import { Avatar, Button } from "@mui/material";

import '../styles/index.css'

function UploadSection(){
    return (
        <div className="uploadSection">
            <Avatar alt="ProfilePicture" sx={{width:50, height:50}}/>
            <Button className='button' variant='contained' style={{background:"#EE4A87"}}>Upload new pitcure</Button>
            <Button className='button' variant="contained" style={{background:'#ECEBF0', color:'black'}} >Delete</Button>
        </div>
    )
}

export default UploadSection