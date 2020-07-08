import React from 'react';

const Home = () => {
	return (
		
		<div className='home'>
			<div className='vert'>
			<img className='dp' src={require('./images/profilepic.jpg')}alt-text='Profile picture'></img>
					<br />
					<h1>Yogesh Agrawal</h1>
					<p className='lead'>
					Upcoming Software Developer Ready For Coporate Face Off !
					</p>
					<ul class="list-inline "> 
					<li><a title="" className="icon" href="mailto:yogeshagrawal50@gmail.com" target="_blank" data-original-title="Mail"><i className="fas fa-envelope fa-5x" ></i></a></li>
					<li> <a title="" className="icon" href="https://github.com/yogeshagrawal50" target="_blank" data-original-title="Github"> <i className="fab fa-github fa-5x"></i></a></li>
					<li> <a title="" className="icon" href="https://www.linkedin.com/in/yogesh-agrawal-3532b6150/" target="_blank" data-original-title="LinkedIn"><i className="fab fa-linkedin fa-5x"></i></a></li>


					</ul>
					
			</div>

		</div>
	);
};

export default Home;
