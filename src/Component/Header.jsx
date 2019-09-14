import React from 'react'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarToggler, MDBCollapse } from 'mdbreact'

import Profile from '../Images/Profile.jpg'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      collapse: false,
      isWideEnough: false
    }
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick () {
    this.setState({
      collapse: !this.state.collapse
    })
  }

  render () {
    return (
      <header className='App-Header'>

        <MDBNavbar color='black' dark expand='md' fixed='top'>
          <MDBNavbarBrand href='/'>
            <img src={Profile} alt='Logo Full' style={{ width: '30px', 'border-radius': '110px' }} />
                Muhammad Usama Ashraf
          </MDBNavbarBrand>
          {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.handleOnClick} />}
          <MDBCollapse isOpen={this.state.collapse} navbar />
        </MDBNavbar>
      </header>

    )
  }
}

export default Header
