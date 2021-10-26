import React, { useState } from "react";
import Headers from "./Header";
import "./index.css"
// import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";
import Footer from "./Footer"

const App = () => {

    const [addItem, setAddItem] = useState([]);
    const AddNote = (note) => {
        // alert("i m Clicked")
        setAddItem((prevData) => {
            return [...prevData, note]
        })
    }

    const onDelete = (id) =>{
        setAddItem((oldData) =>
        oldData.filter((currdata,indx)=>{
            return indx !== id;
        })
        )
    }
    return (
        <>
        <div>
            <Headers />
            <br />
            <CreateNote passNote={AddNote} />
           
            {addItem.map((val,index) => {
            return (
                <Note
                key={index}
                id={index}
                tittle={val.tittle}
                content={val.content}
                deleteItem = {onDelete}
            />
            );
        } )}
            {/* <footer className ="Footer">
            Copyright &copy; 2021 Crazy Offers Zone All Right Reserved
            </footer> */}
            <Footer/>
            </div>
        </>
    )

};

export default App;