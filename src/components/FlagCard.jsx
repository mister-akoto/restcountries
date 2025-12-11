import React, { useContext, useEffect, useRef } from 'react'
import commaSeparatePopulation from '../utils/commaSeparatePopulation'
import { ThemeContext } from '../contexts/ThemeProvider'
import toggleTheme from '../utils/toggleTheme'

const FlagCard = ({flagData}) => {
  const {darkTheme} = useContext(ThemeContext)
  const population =  commaSeparatePopulation(flagData?.population)
  const flagCardRef = useRef()

  useEffect(()=>{
    toggleTheme(flagCardRef.current, darkTheme)
  },[darkTheme])

  
  return (
    <div ref={flagCardRef}  className='flag-card light-containers'>
      <div className="flag">
        <img src={flagData.flags.png} alt={flagData.flags.alt} />
      </div>

      <div className="country-details">
        <h2 className="country-name">{flagData.name.common}</h2>
        <p className="details"><span>Population: </span>{population}</p>
        <p className="details"><span> Region: </span>{flagData.region}</p>
        <p className="details"><span> Capital: </span>{flagData.capital}</p>
      </div>
      
    </div>
  )
}

export default FlagCard


