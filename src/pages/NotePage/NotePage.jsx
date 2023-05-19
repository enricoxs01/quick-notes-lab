import "./NotePage.css"
import { useState, useEffect } from "react";
import * as notesAPI from '../../utilities/notes-api';


export default function NotePage() {
  const [newNote,setNewNote]=useState("")
  const [notes, setNotes] = useState([]);


  async function handleSubmit(evt) {
    evt.preventDefault()
    await notesAPI.addNote(newNote)
  }

  
  return (
    <>
    <form className="noteForm" onSubmit={handleSubmit}>
        <label className="label">
          NEW NOTE:
          <textarea className="textArea" value={newNote} onChange={(evt) => setNewNote(evt.target.value)} />
        </label>
        <input className="button" type="submit" value="Submit" />
    </form>

    { (notes.length !== 0) ?
         <h1> there are notes</h1>
        :
        <h1>No Notes Yet!</h1>
    }
    </>
  );
}