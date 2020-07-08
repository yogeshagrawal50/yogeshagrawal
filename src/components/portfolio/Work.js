import React from 'react';
import Card from 'react-bootstrap/Card';

const Work = () => {
	return (
		<div className='Work'>
      <h2 className='Work-header'> <i className='fas fa-hashtag'></i>Work Experience </h2>
			<section className='Work-list'>
        <div className='job-cards'> 

					<Card className='card'>
						<Card.Header className='card-header'>
							<h4 className='card-title'>CELEBAL TECH</h4>
							<h5>
								ASSOCIATE DATA ENGINEER </h5>
                <span className="job">
                <h6>20 Jan 2020 – Present | Jaipur</h6>
								<h6><i class="fas fa-plus"></i>
									Working on Demand Forecasting project which will help
									enterprises to forecast their sales of particular product.
									This project includes working on sql server,azure pipelines
									and MLOps.
								</h6>
                </span>                								
						</Card.Header>
					</Card>
					<Card>
						<Card.Header>
							<h4 className='card-title'>MIT, MAHE</h4>
							<h5>PROJECT RESEARCH INTERN</h5>
              <span className='job'>
              <h6>10 June 2019– 29 June 2019 | Manipal</h6>
								<h6><i class="fas fa-plus"></i>
									Research based project on Prediction of Medical Health
									Condition using Machine learning techniques.Research on how
									different machine learning techniques can be used to predict
									health condition using vital sings.
								</h6>
              </span>
						</Card.Header>
						</Card>
            
					<Card>
						<Card.Header>
							<h4 className='card-title'>MSIS, MAHE</h4>
							<h5>
								TRAINING AND PROJECT INTERN{' '}
								</h5>
                <span><h6>10 June 2019– 29 June 2019 | Manipal</h6>
								<h6><i class="fas fa-plus"></i>
									Perform image analysis on human cells using digital image
									processing and computer vision techniques and classify them
									into benign and malignant cells using machine learning
									techniques.
								</h6></span>
						</Card.Header>
					</Card>

					<Card className='card'>
						<Card.Header className='card-header'>
							<h4 className='card-title'>eDC, IIT Delhi</h4>
							<h5>Campus Ambassador</h5>
                <span className="job">
                <h6>December 2017 – February 2018 | WFH</h6>
								<h6><i class="fas fa-plus"></i>
								Ideated on and execute innovative campaign plans and developed an expanded knowledge of the campaign.
								Assisted with outreach program and services in the campus on the behalf of the campaign.
							  Developed Interpersonal skills as my main  responsibility included product and service endorsement.
								</h6>
                </span>                								
						</Card.Header>
					</Card>			

					<Card className='card'>
						<Card.Header className='card-header'>
							<h4 className='card-title'>Martopolis.com</h4>
							<h5>Digital Marketing Intern</h5>
                <span className="job">
                <h6>September 2017 – December 2017 | Jaipur</h6>
								<h6><i class="fas fa-plus"></i>
									Working on various social media platforms to expand company's online presesence and
									assisted in the creation of signage, mock-ups, email campaigns, and social media content.
									Developed new social media campaigns and planned promotional activities on variosu social media platfroms.
								</h6>
                </span>                								
						</Card.Header>
					</Card>

					<Card className='card'>
						<Card.Header className='card-header'>
							<h4 className='card-title'>Rendenvoz, IIT Delhi</h4>
							<h5>Campus Ambassador</h5>
                <span className="job">
                <h6>September 2017 – October 2017 | WFH</h6>
								<h6><i class="fas fa-plus"></i>
								Ideated on and execute innovative campaign plans and developed an expanded knowledge of the campaign.
								Assisted with outreach program and services in the campus on the behalf of the campaign.
							  Developed Interpersonal skills as my main  responsibility included product and service endorsement.
								</h6>
                </span>                								
						</Card.Header>
					</Card>

          </div>		
      	</section>
		</div>
	);
};

export default Work;
