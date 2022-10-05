import React from 'react'

import './style.css'
// import '../../images/logo.png'
import { Searchbar } from '../../components'

const Header = () => {
  return (
    <header>
        <img src="../../images/logo.png" alt="HubGit" />
        <Searchbar />
    </header>
  )
}

export default Header