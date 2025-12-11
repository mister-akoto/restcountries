
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import { useLoaderData,Link } from 'react-router-dom'
import FlagCard from '../components/FlagCard'
import Filter from '../components/Filter'
import { useState } from 'react'
import Button from '../components/Button'

const Home = () => {
  const flagData = useLoaderData()
  const [startQuery, setStartQuery] = useState(true)
  const [query, setQuery] = useState('')


  function handleSearch(){
    const searchBar = document.querySelector('input')
    const selectElement = document.querySelector('select')
    selectElement.value = 'Filter by Region'
    setQuery(searchBar.value)
    setStartQuery(true)
  }

  function handleFilter(e){
    const searchBar = document.querySelector('input')
    searchBar.value = ''
    setQuery(e.target.value)
    setStartQuery(false)
  }

  function filterData(data, query, startQuery){
    if(startQuery){
      if(query == ""){
      return data.filter(country=>country.name.common.toLowerCase().includes(query.toLowerCase().trim()))
      }
      else{
      return data.filter(country=>country.name.common.toLowerCase() == (query.toLowerCase().trim()))
      }
    }else{
      return data.filter(country=>country.region.toLowerCase() ==query.toLowerCase())
    }
    
  }




  return (
    <div className='home-page'>
       <div className="search-filter">
        <SearchBar onClick={handleSearch}/> <Filter onChange = {handleFilter}/>
        </div> 
        <div className="flag-section">
          { filterData(flagData, query,startQuery).length > 0?

            filterData(flagData, query, startQuery).map((data)=>{
                return <Link to={data.name.common}><FlagCard key={data.name.common} flagData={data}/> </Link>
            }) :
            <div className='error'>
              <h1>Country Not Found</h1>
            </div>
          }
        </div>

    </div>
  )
}

export default Home

export async function FlagDataLoader(){
  const resp = await fetch('https://restcountries.com/v3.1/all?fields=name,capital,region,flags,population,cca3')
  const data = await resp.json()
  const newData = await data.filter(data=> !(data.population == 0 || data.capital == ""))
  if(!resp.ok){
    throw Error("Could Not Fetch Data")
  }

  return newData
}
