import { noteContext } from "../Helpers/Contexts"
import { useContext } from "react"

const Header = () => {

    const {handleDarkMode} = useContext(noteContext)

    return (
    <div className='header'>
      <h1>Notes</h1>
      <button 
        onClick={handleDarkMode}
        className="save">Toggle Mode</button>
    </div>
  )
}

export default Header
