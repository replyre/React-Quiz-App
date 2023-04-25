import React from 'react'
import "./ErrorMessage.css"

const ErrorMessage = ({children}) => {
  return (
    <div className="Error">
      {children}
    </div>
  )
}

export default ErrorMessage
