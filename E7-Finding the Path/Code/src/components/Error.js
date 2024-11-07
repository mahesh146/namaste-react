import React from 'react'
import { useRouteError } from 'react-router-dom'
const Error = () => {

  const err = useRouteError();
  return (
    <div>
        <h1>Oops!</h1>
        <h1>Sorry! Try Again</h1>
        <h3>{err.status}: {err.statusText}</h3>

    </div>
  )
}

export default Error