import React from 'react';
import {Modal, Button} from 'react-bootstrap';

function MyVerticallyCenteredModal(props) {
	const title=''

	return (
		<Modal
			{...props}
			size='md'
			aria-labelledby='contained-modal-title-vcenter'
			eventkey={props.key}
			centered>
			<Modal.Header closeButton>
				<Modal.Title id='contained-modal-title-vcenter'>
					<h2>{props.title}</h2>
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
        <h6>{props.tags}</h6>
				<p>{props.text}</p>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default MyVerticallyCenteredModal ;

