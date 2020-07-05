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
      display:'inline-block',
      fontSize: '16px',
      marginRight: '5%',
      padding:'3px',
      fontWeight:'bold'
    }

    const but={
      display:'inline-block',
      background:'transparent',
      margin:'10px'
    }
    return (
    
        <Navbar className='navheader' collapseOnSelect expand="xl" bg="dark" variant="dark" style={navv}>
        <Navbar.Brand href="/" ><span class="navbar-brand mb-0 h1"style={pStyle}>Yogesh Agrawal</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">            
          </Nav>
          <Nav style={items}>
            <Link to='/bio'><span sstyle={but}>Bio</span></Link>
            <Link to ='/portfolio'>Portfolio</Link>
            <Link to='#contact'>Contact</Link>
            <Link to='#resume'> Resume</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
   
    );
  }
}

export default NavBar;
