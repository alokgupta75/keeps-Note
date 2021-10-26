
import React, { useState } from "react"
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';



const Compo  = (props) =>{
    const [line,setline] =useState(false)

    const cutIt =() =>{
        setline(true);
    }
    return(<div className = "todo_style">
    <span onClick ={cutIt}><DeleteForeverRoundedIcon/></span>
         <li style = {{textDecoration : line ? "line-through"  : "none"}}>{props.text}</li>
    </div>)
    
};

export default Compo;