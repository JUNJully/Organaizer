import React from 'react'
import {FormControl} from 'react-bootstrap'

function InputTime(props) {
	
	function handleChange(e){
		props.onTimeChange(e.target.value)
	}
	return (
	
	<FormControl type='time' value = {props.timeValue} onChange={handleChange}/>

	)
}

export default InputTime