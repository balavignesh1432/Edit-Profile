import { useEffect, useState } from "react";
import axios from 'axios';
import { Button, Divider, Typography } from "@mui/material";
import UploadSection from "./UploadSection";
import Details from "./Details"
import Presence from "./Presence";

import '../styles/index.css'

function EditProfile(){

    const url = 'https://endpoint'

    const [data, setData] = useState({}) 

    const [topData, setTopData] = useState({})
    const [bottomData, setBottomData] = useState({})

    function setBottom(value){
        setBottomData(value)
    }

    function setTop(value){
        setTopData(value)
    }

    useEffect((prev)=>{
        setData({...prev,...topData,...bottomData})
    },[topData, bottomData])

    function handleSave(){
        // console.log(data);
        axios.post(url, data)
        .then((response)=>{
            console.log(response);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    return (
        <div className="editPage">
            <UploadSection />
            <Details passTop={setTop} />
            <div className="division">
                <Typography variant="h6" align='left' style={{color:'#767579'}}>ONLINE PRESENCE</Typography>
                <Divider />
            </div>
            <Presence passBottom={setBottom}/>
            <Button className='button' variant='contained' style={{alignSelf:'flex-start', background:"#EE4A87"}} onClick={handleSave}>Save Profile</Button>
        </div>
    );
}

export default EditProfile