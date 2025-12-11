
import { useLoaderData } from 'react-router-dom'
import getFirstObjectValue from '../utils/getFirstObjectValue'
import commaSeparatePopulation from '../utils/commaSeparatePopulation'
import getLanguages from '../utils/getLanguages'
import useFetchBorder from '../hooks/useFetchBorder'

import Button from '../components/Button'
import { useContext, useEffect, useRef } from 'react'
import { ThemeContext } from '../contexts/ThemeProvider'
import toggleTheme from '../utils/toggleTheme'



const FlagInfo = () => {

  const flagInfo = useLoaderData()
  const countryBorder = useFetchBorder()
  const {darkTheme} = useContext(ThemeContext)
  const infoBlockRef = useRef()
  const borderTextRef= useRef()
  let nativeName =flagInfo[0]?.name?.nativeName
  let currency  = flagInfo[0].currencies
  let languages = getLanguages(flagInfo[0])

  nativeName = getFirstObjectValue(nativeName)
  currency= getFirstObjectValue(currency)
  

  useEffect(()=>{
    toggleTheme(infoBlockRef.current,darkTheme,'dark-text','light-text')
    toggleTheme(borderTextRef.current, darkTheme,'dark-text','light-text')
  },[darkTheme])
  





 


  



  return (
    <div className='flag-info-page'>
        <Button text="Back" className='back-btn light-containers' link= "/" />
      
      <div className="flag-n-info">
        <div className="big-flag">
          <img src={flagInfo[0].flags.svg} alt="" />
        </div>
        <div className="flag-info">
          <div ref={infoBlockRef} className="infoBlock light-text">
            <div className="infoBlock1">
              <h2> {flagInfo[0].name.common}</h2>
              <p><b>Native Name: </b> {nativeName.common} </p>
              <p><b>Population: </b> {commaSeparatePopulation(flagInfo[0].population)} </p>
              <p><b>Region: </b> {flagInfo[0].region} </p>
              <p><b>Sub Region: </b> {flagInfo[0].subregion} </p>
              <p><b>Capital: </b> {flagInfo[0].capital} </p>
            </div>
            <div className="infoBlock2">
              <p><b>Top Level Domain: </b> {flagInfo[0].tld} </p>
              <p><b>Currencies: </b> {currency.name} </p>
              <p><b>Languages: </b> {languages} </p>
            </div>
          </div>
    {flagInfo[0].borders? <div className="borders">
            <p ref={borderTextRef}><b>Border Countries: </b></p>
            {flagInfo[0].borders.map((border)=>{
              return countryBorder?.map((country)=>{
                if(country.cca3 === border){
                  return <Button className='border light-containers' text={country.name.common} link={`/${country.name.common}`}/>
                }
              })
                
              })
            }    
          </div> : ""
    }
        </div>
      </div>




    </div>
  )
}

export default FlagInfo

export async function flagInfoLoader({params}){
  const {id} = params
  const resp = await fetch('https://restcountries.com/v3.1/name/'+id)
  const data = await resp.json()
  const newData = await data.filter(data=> !(data.population == 0 || data.capital == "") && data.name.common.toLowerCase() ===id.toLowerCase())
  if(!resp.ok){
    throw Error('An Error Occurred')
  }
  return newData
}


