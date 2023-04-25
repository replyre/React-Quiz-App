import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div className='header'>
       <Link to="/React-Quiz-App" className='title'> Quizophile
       </Link>
       <p className='title-info'>a react quiz app</p>
       <hr className='line'/>
    </div>
  )
}

export default Header
