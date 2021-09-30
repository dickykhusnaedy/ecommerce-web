import React from 'react'

const Button = ({title}) => {
  return (
    <div className="d-grid gap-2">
      <div className="btn btn-primary btn-sm">
        {title}
      </div>
    </div>
  )
}

export default Button
