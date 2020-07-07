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
					<li><a title="" className="icon" href="mailto:yogeshagrawal50@gmail.com" target="_blank" data-original-title="Mail"><i className="fas fa-envelope-square fa-5x" ></i></a></li>
					<li> <a title="" className="icon" href="https://github.com/yogeshagrawal50" target="_blank" data-original-title="Github"> <i className="fab fa-github-square fa-5x"></i></a></li>
					<li> <a title="" className="icon" href="https://www.linkedin.com/in/yogesh-agrawal-3532b6150/" target="_blank" data-original-title="LinkedIn"><i className="fab fa-linkedin-square fa-5x"></i></a></li>


					</ul>
					
			</div>
		
			{/* <div className='home-content'>
					<img className='dp' src={require('./images/profilepic.jpg')}alt-text='Profile picture'></img>
					<br />
					<h2>Yogesh Agrawal</h2>
				<div className='home-left-col'>
					<div className='intro'>
						<h1 className='tagline'>
							Upcoming Software Developer Ready For Coporate Face Off !
						</h1>
						<div className='divider-red'></div>
					</div>
				</div>
				<div className='home-right-col'>
					<SidebarMenu />
				</div>
			</div> */}
		</div>
	);
};

export default Home;
