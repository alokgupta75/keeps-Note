// import { Button } from "bootstrap"
import React, { useState } from "react"
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';


const CreateNote = (props) => {

const [note , setnote] = useState({
    tittle : "",
    content: "",
});

const inputEvent = (event) => {
    
    const {name , value} = event.target;
    setnote((prevdata) =>{
        return {
            ...prevdata,[name] : value,
        }
    })
}
console.log(note);

const addEvent = () =>{
     props.passNote(note)
     setnote({
        tittle : "",
        content: "",
    });
}

    return (
        <>
        <div className ="mheight">
        <div className = "main_note">
        <form>
            <input type ="text" name = "tittle" value = {note.tittle} onChange = {inputEvent} placeholder = "Tittle" />
            <textarea  rows = "" column = "" 
            name = "content"
            value = {note.content} onChange = {inputEvent} placeholder = "Write a note..." />
            <Button onClick = {addEvent}>
                <AddIcon className = "plus_sign" />
            </Button>
        </form>

        </div>
        </div>
        </>
    )
}

export default CreateNote;