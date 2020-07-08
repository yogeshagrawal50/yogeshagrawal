import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { demand, crop, medical, cancer } from './details';


const Project = () => {
	return (
		<div className='project'>
			<div className='projects-header'>
				<h1 className='projects-header'>
					<i class='fas fa-file-code'></i>Projects{' '}
				</h1>
			</div>
			<div className='project-list'>
				<div className='job-cards'>

					<Card className='card'>
						<Card.Body className='project-body'>
							<Card.Title>{demand.title}</Card.Title>
							<Card.Subtitle className='mb-2 text-muted'>
								{demand.tags}
							</Card.Subtitle>
							<Card.Text><i class="fas fa-plus"></i> {demand.subtitle}</Card.Text>
							<div className='div-button'>
								<Button
									type='button'
									variant="dark"
									class='btn-dark'
									data-toggle='modal'
									data-target='#forecastmodal'>
									Know More
								</Button>

								<div
									class='modal fade'
									id='forecastmodal'
									tabindex='-1'
									role='dialog'
									aria-labelledby='exampleModalCenterTitle'
									aria-hidden='true'>
									<div
										class='modal-dialog modal-dialog-centered'
										role='document'>
										<div class='modal-content'>
											<div class='modal-header'>
												<h5 class='modal-title' id='exampleModalLongTitle'>
													{demand.title}
												</h5>
												<button
													type='button'
													class='close'
													data-dismiss='modal'
													aria-label='Close'>
													<span aria-hidden='true'>&times;</span>
												</button>
											</div>
											<div class='modal-body'>
												<h6>{demand.tags}</h6>
												<br />
												{demand.desc}
											</div>
											<div class='modal-footer'>
												<button
													type='button'
													class='btn btn-secondary'
													data-dismiss='modal'>
													Close
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>

					<Card className='card'>
						<Card.Body className='project-body'>
							<Card.Title>{crop.title}</Card.Title>
							<Card.Subtitle className='mb-2 text-muted'>
								{crop.tags}
							</Card.Subtitle>
							<Card.Text><i class="fas fa-plus"></i>{crop.subtitle}</Card.Text>
							<div className='div-button'>
								<Button
									type='button'
									variant="dark"
									class='btn-dark'
									data-toggle='modal'
									data-target='#cropmodal'>
									Know More
								</Button>

								<div
									class='modal fade'
									id='cropmodal'
									tabindex='-1'
									role='dialog'
									aria-labelledby='exampleModalCenterTitle'
									aria-hidden='true'>
									<div
										class='modal-dialog modal-dialog-centered'
										role='document'>
										<div class='modal-content'>
											<div class='modal-header'>
												<h5 class='modal-title' id='exampleModalLongTitle'>
													{crop.title}
												</h5>
												<button
													type='button'
													class='close'
													data-dismiss='modal'
													aria-label='Close'>
													<span aria-hidden='true'>&times;</span>
												</button>
											</div>
											<div class='modal-body'>
												<h6>{crop.tags}</h6>
												<br />
												{crop.desc}
											</div>
											<div class='modal-footer'>
												<button
													type='button'
													class='btn btn-secondary'
													data-dismiss='modal'>
													Close
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>

					<Card className='card'>
						<Card.Body className='project-body'>
							<Card.Title>{medical.title}</Card.Title>
							<Card.Subtitle className='mb-2 text-muted'>
								{medical.tags}
							</Card.Subtitle>
							<Card.Text><i class="fas fa-plus"></i>{medical.subtitle}</Card.Text>
							<div className='div-button'>
								<Button
									type='button'
									variant="dark"
									class='btn-dark'
									data-toggle='modal'
									data-target='#exampleModalCenter'>
									Know More
								</Button>

								<div
									class='modal fade'
									id='exampleModalCenter'
									tabindex='-1'
									role='dialog'
									aria-labelledby='exampleModalCenterTitle'
									aria-hidden='true'>
									<div
										class='modal-dialog modal-dialog-centered'
										role='document'>
										<div class='modal-content'>
											<div class='modal-header'>
												<h5 class='modal-title' id='exampleModalLongTitle'>
													{medical.title}
												</h5>
												<button
													type='button'
													class='close'
													data-dismiss='modal'
													aria-label='Close'>
													<span aria-hidden='true'>&times;</span>
												</button>
											</div>
											<div class='modal-body'>
												<h6>{medical.tags}</h6>
												<br />
												{medical.desc}
											</div>
											<div class='modal-footer'>
												<button
													type='button'
													class='btn btn-secondary'
													data-dismiss='modal'>
													Close
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>

					<Card className='card'>
						<Card.Body className='project-body'>
							<Card.Title>{cancer.title}</Card.Title>
							<Card.Subtitle className='mb-2 text-muted'>
								{cancer.tags}
							</Card.Subtitle>
							<Card.Text><i class="fas fa-plus"></i>{cancer.subtitle}</Card.Text>
							<div className='div-button'>
								<Button
									type='button'
									variant="dark"
									class='btn-dark'
									data-toggle='modal'
									data-target='#cancermodal'>
									Know More
								</Button>

								<div
									class='modal fade'
									id='cancermodal'
									tabindex='-1'
									role='dialog'
									aria-labelledby='exampleModalCenterTitle'
									aria-hidden='true'>
									<div
										class='modal-dialog modal-dialog-centered'
										role='document'>
										<div class='modal-content'>
											<div class='modal-header'>
												<h5 class='modal-title' id='exampleModalLongTitle'>
													{cancer.title}
												</h5>
												<button
													type='button'
													class='close'
													data-dismiss='modal'
													aria-label='Close'>
													<span aria-hidden='true'>&times;</span>
												</button>
											</div>
											<div class='modal-body'>
												<h6>{cancer.tags}</h6>
												<br />
												{cancer.desc}
											</div>
											<div class='modal-footer'>
												<button
													type='button'
													class='btn btn-secondary'
													data-dismiss='modal'>
													Close
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>

					<Card className='card'>
						<Card.Body className='project-body'>
							<Card.Title>Phone Book</Card.Title>
							<Card.Subtitle className='mb-2 text-muted'>
								Tags:-React.js, MongoDB, Express.js, Node.js, HTML, CSS,REST API
							</Card.Subtitle>
							<Card.Text><i class="fas fa-plus"></i>
								I built a Full-stack MERN contact keeper app with React hooks,
								context & JWT authentication and build an API model using
								express. Each user is unique and has their own set of contacts,
								they can also filter, search, update, delete their contacts to
								view specific people.
							</Card.Text>
							<div className='div-button'>
								<a
									href='https://github.com/yogeshagrawal50/PhoneBook_MERN'
									class='btn btn-dark'
									role='button'
									aria-pressed='true'>
									Github
								</a>
								<a
									href='https://contactmanagers.herokuapp.com/'
									class='btn btn-dark'
									role='button'
									aria-pressed='true'>
									App Link
								</a>
							</div>
						</Card.Body>
					</Card>

					<Card className='card'>
						<Card.Body className='project-body'>
							<Card.Title>Movie Recommedation System</Card.Title>
							<Card.Subtitle className='mb-2 text-muted'>
								Tags:- Collaborative Filtering, Content-Based Filtering,
								Content-Aware Filterin, Collaborative filtering
							</Card.Subtitle>
							<Card.Text><i class="fas fa-plus"></i>
								Implemented a few recommendation algorithms and builtan ensemble
								of these models to come up with our final recommendation system.
							</Card.Text>
							<div className='div-button'>
								<Button
									href='https://github.com/yogeshagrawal50/Movie-Recommendation-System'
									variant="dark"
									class='btn-dark'
									role='button'
									aria-pressed='true'>
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
							<Card.Text><i class="fas fa-plus"></i>
								I built this web application with React.js to search for Github
								users. The user is able to search for a GitHub user handle and
								the search must trigger a call to GitHub's API which takes you
								to repositories associated with that handle. The repository name
								and link to the repository URL are made available and gets
								displayed on the page.
							</Card.Text>
							<div className='div-button'>
								<Button
									href='https://github.com/yogeshagrawal50/Github_user_finder'
									variant="dark"
									class='btn-dark'
									role='button'
									aria-pressed='true'>
									Github
								</Button>

								<Button
									href='https://userfindergit.netlify.app/'
									variant="dark"
									class='btn-dark'
									role='button'
									aria-pressed='true'>
									App Link
								</Button>
							</div>
						</Card.Body>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default Project;