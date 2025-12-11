import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import Button from './Button'

const ErrorMessage = () => {
  const error = useRouteError()
  return (
    <div className='error'>
      <h1>An Error Occurred</h1>
      <p>{error.message}</p>
      <Button className="border light-containers" link="/" text='Go to Home Page' ></Button>
    </div>
  )
}

export default ErrorMessage
