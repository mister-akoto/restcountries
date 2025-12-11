import { useState } from "react"
export default function useSearchCountry(data){

  const  [countryData, setCountryData] = useState(data)

  function handleSearch(data){
  const searchBar = document.querySelector('input')
  const newdata = data.filter((country)=>{
   return country.name.common.toLowerCase().trim() === searchBar.value.toLowerCase().trim()
  })
  console.log(newdata)
  setCountryData(newdata)
  }

  return {countryData,handleSearch}
}