import React from 'react';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Work from './Work';
import Header from '../menu/Header';
import Project from './Project';
<<<<<<< HEAD
import NavBar from '../menu/NavBar'

=======
import ScrollToTop from '../menu/ScrollToTop'
>>>>>>> parent of 24a7dbc... updated modal issue

import Sidebar from '../menu/Sidebar';

const Portfolio = () => {
	return (
		<div className='portfolio'>
		<div className='header-name-light' ><Header /></div>

			<div className='portfolio-header'>Portfolio.</div>

				<div className='portfolio-container'>

					<div className='portfolio-left-col'>
						<div className='sidemenu'>
							<Sidebar />
						</div>
					
					</div>
					<div className='portfolio-right-col'>
							
						<div className='about-container'>
							<section id='work'>
								<Work />
							</section>

							<div class='divider-red'></div>

							<section id='project'>
								<Project />
							</section>
							
							<div class='divider-red'></div>

						</div>
						
						</div>
					</div>
			</div>
	);
};

export default Portfolio;

{/* <div id="portfolio-footer-container">
							<ScrollToTop />
							</div>  */}
