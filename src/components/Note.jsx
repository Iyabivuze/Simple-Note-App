import {MdDeleteForever} from 'react-icons/md'
import { useContext } from 'react'
import {noteContext} from '../Helpers/Contexts'

const Note = ({note}) => {
    const {notes, setNotes} = useContext(noteContext)

  const deleteNote = (id) => {
    const deletedNotes = notes.filter((myNote) => myNote.id !== id )
    setNotes(deletedNotes)
  }

  return (
    <div className="note">
      <p>{note.text}</p>
      <div className="noteFooter">
        <small>{note.date}</small>
        <MdDeleteForever 
          className='deleteIcon' 
          size='1.3em'
          onClick={() => deleteNote(note.id)}
        />
      </div>
    </div>
  )
}

export default Note
