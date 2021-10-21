import React from 'react'
import {FormControl} from 'react-bootstrap'

function InputTitle(props) {
	function handleChange(e){
		props.onTitleChange(e.target.value)
	}
	return (
	
	<FormControl type='text' value = {props.titleValue} onChange={handleChange}/>
	
	)
}

export default InputTitle