import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { reveal as Menu } from 'react-burger-menu';

class BurgerMenu extends Component {
  constructor (props) {
    super(props);
    this.state = {
      menuOpen: false
    }
  }

  handleStateChange = state => {
    this.setState({menuOpen: state.isOpen})
  }

  closeMenu = () => {
    this.setState({menuOpen: false})
  }

  render () {
    return (
      <div className='burger-menu'>
        <Menu
          right pageWrapId={ "page-wrap" }
          // outerContainerId={ "outer-container" }
          isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}
          >
            <Link to ='/'><span className="menu-item" onClick={() => this.closeMenu()}>Home</span></Link>
            <Link to ='/bio'><span className="menu-item" onClick={() => this.closeMenu()}>Bio</span></Link>
            <Link to ='/portfolio'><span className="menu-item" onClick={() => this.closeMenu()}>Portfolio</span></Link>
            <Link to ='/resume'><span className="menu-item" onClick={() => this.closeMenu()}>Resume</span></Link>
            
            <div className='copyright'>&copy; Yogesh Agrawal 2020</div>
        </Menu>
      </div>
    )
  };
};

export default BurgerMenu;