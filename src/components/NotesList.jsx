import Note from './Note'
import { useContext } from 'react'
import {noteContext} from '../Helpers/Contexts'
import AddNote from './AddNote'

const NotesList = () => {

    const {notes, search} = useContext(noteContext)
    
    const filteredNotes = notes.filter(note => note.text.toLowerCase().includes(search.toLowerCase()))


  return (

    <div className="notesList">
        {
          
          filteredNotes.map((note) =>
          <Note key={note.id} note={note} />)
          
          }

        <AddNote addNote/>
    </div>
  )
}

export default NotesList
