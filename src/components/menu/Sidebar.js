import React from 'react';
import { Link } from 'react-scroll'

const Sidebar = () => {
  return (
    <div>
      <div className='menu'>
        <ul className='sidebar-menu'>
          {/* <li><a href='/#/work'><span className="sidebar-menu-item"><i className="fas fa-briefcase"></i><span className='menu-label'>Work Experience</span></span></a></li> */}
          {/* <li><a href='/#/project'><span className="sidebar-menu-item"><i className="fas fa-file-code"></i><span className='menu-label'>Projects</span></span></a></li> */}
          
          <li><Link activeClass="active" className="test1" to="work" spy={true} smooth={true} duration={500} ><span className="sidebar-menu-item"><i className="fas fa-briefcase"></i><span className='menu-label'>Work Experience</span></span></Link></li>
          <li><Link activeClass="active" className="test1" to="projects" spy={true} smooth={true} duration={500} ><span className="sidebar-menu-item"><i className="fas fa-file-code"></i><span className='menu-label'>Projects</span></span></Link></li>
          
          <li><a href='/#/resume'><span className="sidebar-menu-item"><i className="fas fa-id-card"></i><span className='menu-label'>Resume</span></span></a></li>
        </ul>
      </div>
    </div>

  )
};

export default Sidebar;