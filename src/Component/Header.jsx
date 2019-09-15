import React from 'react'
import { MDBNavbar, MDBNavbarBrand } from 'mdbreact'

import Profile from '../Images/Profile.jpg'

class Header extends React.Component {
  render () {
    return (
      <header className='App-Header'>

        <MDBNavbar color='aqua-gradient' dark expand='md' fixed='top'>
          <MDBNavbarBrand href='/'>
            <img src={Profile} alt='Pic' className='mr-2' style={{ width: '30px', 'border-radius': '110px' }} />
                Muhammad Usama Ashraf
          </MDBNavbarBrand>
        </MDBNavbar>
      </header>

    )
  }
}

export default Header
