import { useContext, useEffect, useState } from 'react'
import Home, { FlagDataLoader } from './pages/Home'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import HomeLayout from './Layouts/HomeLayout'
import FlagInfo, { flagInfoLoader } from './pages/FlagInfo'
import { ThemeContext } from './contexts/ThemeProvider'
import toggleTheme from './utils/toggleTheme'
import ErrorMessage from './components/ErrorMessage'





function App() {  
  const body = document.querySelector('body')
  const {darkTheme} = useContext(ThemeContext)

  useEffect(()=>{
    toggleTheme(body,darkTheme,'dark-body','light-body')
  },[darkTheme])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<HomeLayout/>} errorElement={<ErrorMessage/>}> 
       <Route index element={<Home/>} loader={FlagDataLoader} />  
       <Route path='/:id' element={<FlagInfo />} loader={flagInfoLoader}/> 
      </Route>
    )
  )
  

  return (
 <RouterProvider router={router} />
  )
}

export default App
