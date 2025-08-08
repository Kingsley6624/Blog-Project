import React from 'react'
import logoIcon from '../../assets/icons/logo-icon.svg'

const Logo = () => {
  return (

        <div className="flex items-center gap-2 size-fit" to="/">
              <img src={logoIcon} alt="logo icon" />
              <span className="font-extrabold text-[2.1rem]">Zarrin</span>
            </div>
  )
}

export default Logo;