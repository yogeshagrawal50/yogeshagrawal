import React from 'react';
import Work from './Work';
import Header from '../menu/Header';
import Project from './Project';
import NavBar from '../menu/NavBar'


import Sidebar from '../menu/Sidebar';
import { Element } from 'react-scroll';


const Portfolio = () => {
	return (
		<div className='portfolio'>
			<div className='portfolio-header'>Portfolio.</div>

				<div className='portfolio-container'>

					<div className='portfolio-left-col'>
						<div className='sidemenu'>
							<Sidebar />
						</div>
					
					</div>
					<div className='portfolio-right-col'>
							
						<div className='about-container'>
							{/* <section id='work'>
								<Work />
							</section> */}

							<Element name="work" className="element" >
								<Work />
							</Element>

							<div class='divider-red'></div>

							{/* 
							<section id='project'>
								<Project />
							</section> */}

							<Element name="projects" className="element" >
								<Project />
							</Element>

							<div class='divider-red'></div>

						</div>
						
						</div>
					</div>
			</div>
	);
};

export default Portfolio;