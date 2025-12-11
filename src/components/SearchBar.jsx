import { useContext, useEffect, useRef } from "react"
import { ThemeContext } from "../contexts/ThemeProvider"
import toggleTheme from "../utils/toggleTheme"




const SearchBar = ({onClick}) => {

  const {darkTheme} = useContext(ThemeContext)
  const searchBarRef = useRef()
  const searchInputRef = useRef()

  useEffect(()=>{
    toggleTheme(searchBarRef.current, darkTheme)
    toggleTheme(searchInputRef.current, darkTheme)
  },[darkTheme])

function handleclick(e){
  e.key === 'Enter' && onClick()
}




  return (
    <div ref={searchBarRef} className='search-bar light-containers'>
      <img onClick={onClick}  src=" src\assets\icons8-search-50.png" alt="search button"/>
      <input ref={searchInputRef} onKeyDown={handleclick} type="text" className="search-input light-containers" placeholder='Search for a country...'/>
    </div>
  )
}

export default SearchBar
