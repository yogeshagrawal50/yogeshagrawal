import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import {Navbar, Nav} from 'react-bootstrap'


class NavBar extends Component {
 
  render() {
    const navv = {
      background:'transparent'
    }
    const pStyle = {
      fontSize: '20px',
      marginLeft: '20px'
    };
    const items ={
      fontSize: '16px',
      marginRight: '5%',
      paddind:'3px',
      fontWeight:'bold'
    }
    return (
    
        <Navbar className='navheader' collapseOnSelect expand="xl" bg="dark" variant="dark" style={navv}>
        <Navbar.Brand href="/" ><span class="navbar-brand mb-0 h1"style={pStyle}>Yogesh Agrawal</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">            
          </Nav>
          <Nav style={items}>
            <Nav.Link href='/bio'>Bio</Nav.Link>
            <Nav.Link href='/portfolio'>Portfolio</Nav.Link>
            <Nav.Link href='/contact'>Contact</Nav.Link>
            <Nav.Link href='/resume'> Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
   
    );
  }
}

export default NavBar;
