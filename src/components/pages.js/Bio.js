import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar';

const Bio = () => {
  return (
    <div>
      <Fragment>
        <NavBar />
      </Fragment>

      <div className='bio'>
      <div className='bio-left-col'>
        <div className='bio-header'>Bio.</div>
      </div>
      <div className='bio-right-col'>
        <div className='bio-content'>
          <p>
          I am Yogesh Agrawal, a sixth-semester Information Technology undergrad student at Manipal University Jaipur.
          Throughout the course of my career, I have honed my project management and researching abilities.In my previous role, I exercised critical thinking, communication and worked in contribution of team efforts and organizational improvements.
           </p>
          <p>
          I have got hands-on experience of working with Python and Javacript. I have also got sound knowledge about Data Sciene , Machine Learing and Deep Learning Techniques and currenlty exploring in filed of Web development as a Full Stack Developement using Django , Node.js and React.js. In addition, I am familiar with coding in C and Java and have sound knowledge of MongoDB and MySQL . In my Position of responsibility at Entrepreneurship Cell as Head Of Operations, I had an opportunity to work closely with startups and creating awareness about entrepreneurship and innovation around the campus which was of tremendous help for me to develop skills of leadership, team-work, and collaboration
          </p>
   
          <p>
            Feel free to reach out at <a a href="mailto:yogeshagrawal50@gmail.com">yogeshagrawal50@gmail.com</a> if you'd like to connect.
          </p>
        </div>
        <div className="bio-footer-container">
          <Link to='/'><i class="fas fa-arrow-left"></i>&nbsp;&nbsp;Home</Link>
          <Link to='/portfolio'>Portfolio&nbsp;&nbsp;<i class="fas fa-arrow-right"></i></Link>
        </div>
      </div>
    </div>
    </div>

  )
};

export default Bio;
