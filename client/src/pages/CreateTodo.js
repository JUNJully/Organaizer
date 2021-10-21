import React from 'react'
import InputTime from './InputTime'
import InputTitle from './InputTitle'
import {InputGroup,Button} from 'react-bootstrap'

export const CreateTodo = (props) => {
	const time = props.time
	const title = props.title
	
	function handleTimeChange(time) {
		props.timeChange(time)
	}
	 function handleTitleChange(title) {
		props.titleChange(title) 	
	 }	
     function saveTodoList() {
		 props.saveTodoList()
	 }
    function clickAdd() {
		props.clickAdd()
	}	 
	return (
	<div>
	<style>
	{`.btn-basic{
	background:rgb(230,230,250);
	border:1px solid grey;
	  
  }`}
	</style>
	<InputGroup>
	<InputTime timeValue = {time} onTimeChange = {handleTimeChange}/>
	<InputTitle titleValue = {title} onTitleChange = {handleTitleChange}/>
	<Button variant='basic' onClick={clickAdd}>Добавить</Button>
	</InputGroup>
	<p><Button variant='basic' size='lg' onClick={saveTodoList}>Сохранить</Button></p>

	</div>
	)
}