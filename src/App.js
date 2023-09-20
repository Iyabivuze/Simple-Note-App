import { useState } from 'react';
import './App.css';
import myNotes from './MyNotes'
import NotesList from './components/NotesList';
import {noteContext} from './Helpers/Contexts'
import Search from './components/Search';
import Header from './components/Header';

function App() {
  const [notes, setNotes] = useState(myNotes)
  const [search, setSearch] = useState('')

  const handleSearch = (value) => {
    // const filtered = notes.filter(note => note.text.toLowerCase().includes(value.toLowerCase()))
    setSearch(value)
  }

  const [darkMode, setDarkMode] = useState(false)

  const handleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (

    <noteContext.Provider value={{notes, setNotes, search, handleDarkMode}}>
    <div className={`${darkMode ? 'darkMode': 'myContainer'}`} >
      <div className={'container'}>
        <Header/>
        <Search handleSearch={handleSearch}/>
        <NotesList/>
      </div>
    </div> 
    </noteContext.Provider>
  );
}

export default App;
