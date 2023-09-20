// import React, { useState } from 'react'
import { MdSearch } from 'react-icons/md'
// import { useContext } from 'react'
// import {noteContext} from '../Helpers/Contexts'

const Search = ({handleSearch}) => {

    // const {notes} = useContext(noteContext)
    // const [search, setSearch] = useState('')

  return (

    <div className='search'>
      <MdSearch className='searchIcon' size="1.3em"/>
      <input
        onChange={(e) => handleSearch(e.target.value)} 
        type="text" 
        // value={search}
        placeholder='Type to search a note.....' />
    </div>
  )
}

export default Search
