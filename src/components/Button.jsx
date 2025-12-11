import React, { useContext, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../contexts/ThemeProvider'
import toggleTheme from '../utils/toggleTheme'

const Button = ({text, className, link}) => {
  const{darkTheme} = useContext(ThemeContext)
  const buttonRef = useRef()

  useEffect(()=>{
    toggleTheme(buttonRef.current, darkTheme)
  },[darkTheme])


  return (
    <button ref={buttonRef} className={'button ' +className}>
      <Link to = {link}>
        {text}
      </Link>
      
    </button>
  )
}

export default Button
