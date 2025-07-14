import React from 'react'

const Button = ({text, btnstyle, click}) => {
  return (
    <div>
      <button className={btnstyle}
        onClick={click}>
        {text}</button>
    </div>
  )
}

export default Button