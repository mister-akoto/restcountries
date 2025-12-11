import { useEffect, useRef } from "react"
import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeProvider"
import toggleTheme from "../utils/toggleTheme"


const Filter = ({onChange}) => {
  const filterOptions = ["Africa", "Americas", "Asia", "Europe","Oceania"]
  const FilterRef = useRef()
  const {darkTheme} = useContext(ThemeContext)



  useEffect(()=>{
    toggleTheme(FilterRef.current,darkTheme)
  },[darkTheme])
  

  return (

    
      <select ref={FilterRef} className='filter light-containers' name="region" id="region" onChange={onChange}>
        <option hidden> Filter by Region</option>
            {
              filterOptions.map((option)=>{
                return <option key={option} value={option}>{option}</option>
              })
            }
      </select>
  )
}

export default Filter
