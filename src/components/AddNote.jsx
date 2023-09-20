import { useState } from "react"
import { useContext } from 'react'
import {noteContext} from '../Helpers/Contexts'
import {v4 as myId} from 'uuid'

const AddNote = () => {

    const [noteText, setNoteText] = useState('')
    const {notes, setNotes} = useContext(noteContext)

    const wordsLimit = 200;
    
    // Handling the input texts written in text area
    const handleText = (e) => {

        const remainingWords = wordsLimit - e.target.value.length
        if ( remainingWords >= 0){

            setNoteText(e.target.value)
        }
    }

    // Handling save button and adding new notes
    const handleSaveButton = (text) => {
        
        if(noteText.trim().length > 0 ){

            const newDate = new Date()
            const newNote =
                {
                    id: myId(),
                    text:text,             
                    date: newDate.toLocaleDateString(),
                };

            setNotes([...notes, newNote])
            setNoteText('')
        }
    }

  return (
    <div className="note new">

      <textarea 
        onChange={handleText}
        placeholder="Type to add a note"
        cols="10" 
        rows="8"
        value={noteText}>
      </textarea>

      <div className="noteFooter">
        <small>{wordsLimit - noteText.length} words remaining</small>
        <button className="save"
            onClick={() => handleSaveButton(noteText)}
        >
            Save
        </button>
      </div>
    </div>
  )
}

export default AddNote
