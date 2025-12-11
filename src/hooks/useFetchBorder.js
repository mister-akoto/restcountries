import { useEffect, useState } from "react";

export default function useFetchBorder(){
  const [countryBorder, setCountryBorder] = useState(null)

  async function fetchData(){
    const resp = await fetch('https://restcountries.com/v3.1/all?fields=name,cca3')
    const data = await resp.json()
    setCountryBorder(data)

  }
  useEffect(()=>{
    fetchData()
  },[])

 return countryBorder
}