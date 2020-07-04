import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { CardDeck, Card, Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import MyVerticallyCenteredModal from './Modal'
import {demand,medical, crop,cancer} from './details'



const Project = () => {
	const [modalShow, setModalShow] = useState(false);
	return (
		<div className='project'>
			<div className='projects-header'>
				<h1 className='projects-header'><i class="fas fa-file-code"></i>Projects </h1>
			</div>
			<div className='project-list'>
				<Accordion>
					<div className='job-cards'>
							<Card className='card'>
								<Card.Body className='project-body'>
									<Card.Title>{demand.title}</Card.Title>
									<Card.Subtitle className='mb-2 text-muted'>
										{demand.tags}
									</Card.Subtitle>
									<Card.Text>
										{demand.subtitle}
									</Card.Text>
									<div className='div-button'>
									<Button
										className='button'
										variant='dark'
										type='radio'
										size='sm'
										eventkey='0'
										onClick={() => {
											demand.key === 0 ? setModalShow(true): setModalShow(false)}}	>
										know More
									</Button>
									</div>	
									<MyVerticallyCenteredModal
										show={modalShow}
										onHide={() => setModalShow(false) }
										text={demand.text}
										title={demand.title}
										key={demand.key}
									/>
								</Card.Body>
							</Card>

							<Card className='card'>
								<Card.Body className='project-body' >
									<Card.Title>{cancer.title}</Card.Title>
									<Card.Subtitle className='mb-2 text-muted'>
										{cancer.tags}
									</Card.Subtitle>
									<Card.Text>
										{cancer.subtitle}
									</Card.Text>
									<div className='div-button'>
									<Button
										className='button'
										variant='dark'
										type='radio'
										size='sm'
										eventkey='1'
										onClick={() => setModalShow(true)}>
										know More
									</Button>
									</div>

									<MyVerticallyCenteredModal
										show={modalShow}
										onHide={() => setModalShow(false)}
										text={cancer.desc}
										title={cancer.title}
									/> 									
								</Card.Body>
							</Card>

							<Card className='card'>
								<Card.Body className='project-body'>
									<Card.Title>{medical.title}</Card.Title>
									<Card.Subtitle className='mb-2 text-muted'>
										{medical.tags}
									</Card.Subtitle>
									<Card.Text>
										{medical.subtitle}
									</Card.Text>
									<div className='div-button'>
									<Button
										className='button'
										variant='dark'
										type='radio'
										size='sm'
										eventkey='2'
										onClick={() => setModalShow(true)}>
										know More
									</Button>
									</div>

									<MyVerticallyCenteredModal
										show={modalShow}
										onHide={() => setModalShow(false)}
										eventkey='2'
										text={medical.desc}
										title={medical.title}
									/> 					
								</Card.Body>
							</Card>

							<Card className='card'>
								<Card.Body className='project-body'>
									<Card.Title>
										{crop.title}
									</Card.Title>
									<Card.Subtitle className='mb-2 text-muted'>
										{crop.tags}
									</Card.Subtitle>
									<Card.Text>
										{crop.subtitle}
									</Card.Text>
									<div className='div-button'>
									<Button
										className='button'
										variant='dark'
										type='radio'
										size='sm'
										eventkey='3'
										onClick={() => setModalShow(true)}>
										know More
									</Button>
									</div>

									<MyVerticallyCenteredModal
										show={modalShow}
										onHide={() => setModalShow(false)}
										eventkey='3'
										text={crop.desc}
										title={crop.title}
									/>
								</Card.Body>
							</Card>

							<Card className='card'>
								<Card.Body className='project-body'>
									<Card.Title>Phone Book</Card.Title>
									<Card.Subtitle className='mb-2 text-muted'>
										Tags:-React.js, MongoDB, Express.js, Node.js, HTML, CSS,REST
										API
									</Card.Subtitle>
									<Card.Text>
										I built a Full-stack MERN contact keeper app with React
										hooks, context & JWT authentication and build an API model
										using express. Each user is unique and has their own set of
										contacts, they can also filter, search, update, delete their
										contacts to view specific people.
									</Card.Text>
									<div className='div-button'>
									<Button
										className='button'
										variant='dark'
										type='radio'
										size='sm'
										href='https://github.com/yogeshagrawal50/PhoneBook_MERN'>
										Github
									</Button>
									<Button
										className='button'
										variant='dark'
										type='radio'
										size='sm'
										href='https://contactmanagers.herokuapp.com/'>
										App Link
									</Button>
									</div>
								</Card.Body>
							</Card>
							<Card className='card'>
								<Card.Body className='project-body'>
									<div>
										<Card.Title>Movie Recommedation System</Card.Title>
										<Card.Subtitle className='mb-2 text-muted'>
											Tags:- Collaborative Filtering, Content-Based Filtering,
											Content-Aware Filterin, Collaborative filtering
										</Card.Subtitle>
										<Card.Text>
											Implemented a few recommendation algorithms and builtan
											ensemble of these models to come up with our final
											recommendation system.
										</Card.Text>
									</div>
									<div className='div-button'>
									<Button
										className='button'
										variant='dark'
										type='radio'
										size='sm'
										href='https://github.com/yogeshagrawal50/Movie-Recommendation-System'>
										Github
									</Button>
									</div>
								
								</Card.Body>
							</Card>
						<Card className='card'>
							<Card.Body className='project-body'>
								<Card.Title>Github Users</Card.Title>
								<Card.Subtitle className='mb-2 text-muted'>
									Tags:-React.js, HTML, CSS, API - Github API
								</Card.Subtitle>
								<Card.Text>
									I built this web application with React.js to search for
									Github users. The user is able to search for a GitHub user
									handle and the search must trigger a call to GitHub's API
									which takes you to repositories associated with that handle.
									The repository name and link to the repository URL are made
									available and gets displayed on the page.
								</Card.Text>
								<div className='div-button'>
								<Button
									className='button'
									variant='dark'
									type='radio'
									size='sm'
									href='https://github.com/yogeshagrawal50/Github_user_finder'>
									Github
								</Button>
								<Button
									className='button'
									variant='dark'
									type='radio'
									size='sm'
									href='https://userfindergit.netlify.app/'>
									App Link
								</Button>
								</div>
							</Card.Body>
						</Card>
					</div>
				</Accordion>
			</div>
		</div>
	);
};

export default Project;
