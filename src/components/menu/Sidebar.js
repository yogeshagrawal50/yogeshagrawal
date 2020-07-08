import React from 'react';

const Sidebar = () => {
  return (
    <div>
    <div className='menu'>
    <ul className='sidebar-menu'>
      <li><a href='/portfolio/#work'><span className="sidebar-menu-item"><i className="fas fa-briefcase"></i><span className='menu-label'>Work Experience</span></span></a></li>
      <li><a href='/portfolio/#project'><span className="sidebar-menu-item"><i className="fas fa-file-code"></i><span className='menu-label'>Projects</span></span></a></li>
      <li><a href='/#/resume'><span className="sidebar-menu-item"><i className="fas fa-id-card"></i><span className='menu-label'>Resume</span></span></a></li>
    </ul>
    </div>
    </div>
    
  )
};

export default Sidebar;
