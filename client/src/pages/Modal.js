import React from 'react'
import {Modal,Button} from 'react-bootstrap'

export default function MyModal(props) {

	return (
	<div>
	<style>
	{`.btn-basic{
	background:rgb(230,230,250);
	border:1px solid grey;
	  
  }`}
	</style>
	<Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
	<Modal.Body>
	<h4>{props.message}</h4>
	</Modal.Body>
	<Modal.Footer>
	<Button variant='basic' onClick={props.onHide}>Ok</Button>
	</Modal.Footer>
	</Modal>
	</div>
	)
	
}
