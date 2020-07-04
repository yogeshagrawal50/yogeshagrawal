import React from 'react';
import { Link } from 'react-router-dom';


const SidebarMenu = () => {
  return (
    <ul className='sidebar-menu'>
      <li><Link to='/Bio'><span className="sidebar-menu-item"><i className="fas fa-id-card"></i><span className='menu-label'>Bio</span></span></Link></li>
      <li><Link to='/portfolio'><span className="sidebar-menu-item"><i className="fas fa-briefcase"></i><span className='menu-label'>Portfolio</span></span></Link></li>
      <li><a target='_blank' href='https://kriti-rai.github.io/' className="sidebar-menu-item"><i className="fas fa-pen-fancy"></i><span className='menu-label'>Blog</span></a></li>
      <li><a target='_blank' href='https://github.com/yogeshagrawal50' className="sidebar-menu-item"><i className="fab fa-github"></i><span className='menu-label'>GitHub</span></a></li>
      <li><a target='_blank' href='hhttps://www.linkedin.com/in/yogesh-agrawal-3532b6150/' className="sidebar-menu-item"><i className="fab fa-linkedin-in"></i><span className='menu-label'>Linkedin</span></a></li>
      <li><Link to='/contact'><span className="sidebar-menu-item"><i className="fas fa-clipboard-list"></i><span className='menu-label'>Contact</span></span></Link></li>
      <li><Link to='/resume'><span className="sidebar-menu-item"><i className="fas fa-clock"></i><span className='menu-label'>Resume</span></span></Link></li>
    </ul>
  )
};

export default SidebarMenu;
