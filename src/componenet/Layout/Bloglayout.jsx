import React from 'react'
import Blog from '../Pages/Blog'
import { Outlet } from 'react-router-dom'

const Bloglayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default Bloglayout