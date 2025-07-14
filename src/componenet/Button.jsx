import React from 'react'

const Button = ({text, style, click}) => {
  return (
    <div>
      <button className={style}
        onClick={click}>
        {text}</button>
    </div>
  )
}

export default Button