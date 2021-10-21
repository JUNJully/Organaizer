import React from 'react' 
import ButtonShowTodos from './ButtonShowTodos'
import ButtonCreateTodo from './ButtonCreateTodo'

export default function ButtonShowOrCreateTL(props) {
	function showTodos(){
		props.showTodos()
	}
	function showCreateTodo() {
		props.showCreateTodo()
	}
	if (props.show) {
		return <ButtonShowTodos showTodos={showTodos} loading={props.isLoading}/>
		
	}
	else {
		return <ButtonCreateTodo showCreateTodo={showCreateTodo}/>
	}
}