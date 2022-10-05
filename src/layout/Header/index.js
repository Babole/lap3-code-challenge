import React from 'react'

import './style.css'
import logo from '../../images/logo.png'
import { Searchbar } from '../../components'

const Header = () => {
  return (
    <header>
        <div className='d-flex flex-row'>
          <img src={logo} style={{ maxWidth: "50px"}} alt="HubGit" />
          <h1>HubGit</h1>
        </div>
        <Searchbar />
    </header>
  )
}

export default Header
