import React from 'react'
import {Button} from 'react-bootstrap'

export default function ButtonDeleteTodo(props) {
	return ( <div>

	<Button onClick={props.clickDeleteTodo}/>
	</div>
	)
}