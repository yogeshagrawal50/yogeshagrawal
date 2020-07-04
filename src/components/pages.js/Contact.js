import React from 'react'
import SidebarMenu from '../menu/SidebarMenu';



const Contact = () => {
  return (
    <div className="contact" >
      <div className="cent">
        <h2 className="heading"> Let's Connect !</h2>
        <div className="btn-group tbl-op" role="toolbar">
          <ul className="fa-ul">
            <li><a href="https://github.com/yogeshagrawal50" class="icon"><i class="fab fa-github-square fa-5x" ></i></a></li>
            <li><a href="https://www.linkedin.com/in/yogesh-agrawal-3532b6150/" class="icon"><i class="fab fa-linkedin fa-5x" style={{ color: "blue" }}></i></a></li>
            <li><a href="https://www.instagram.com/the_yogeshagrawal/" class="icon"><i class="fab fa-instagram-square fa-5x" id="insta"></i></a></li>
            <li><a href="https://angel.co/u/yogesh-agrawal-9" class="icon"><i class="fab fa-angellist fa-5x" ></i></a></li>
            <li><a href="mailto:yogeshagrawal50@gmail.com" class="icon"><i class="fas fa-envelope-square fa-5x" style={{ color: "red" }}></i></a></li>
          </ul>

        </div>
      </div>
      
    </div>
  )
}

export default Contact
