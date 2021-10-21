import React from 'react'
import {useEffect,useState} from 'react'
import Todo from './Todo'
import {ListGroup} from 'react-bootstrap'





export const TodoList = (props) => {
    const nameOfMonth = {0:'января', 1:'февраля', 2:'марта', 3:'апреля', 4:'мая', 5:'июня', 6:'июля', 7:'августа', 8:'сентября', 9:'октября', 10:'ноября', 11:'декабря'}
	const nameOfDayWeek ={0:'Воскресенье',1:'Понедельник',2:'Вторник',3:'Среда',4:'Четверг',5:'Пятница',6:'Суббота'}
	let date=props.selectedDay.getFullYear()+'-'+props.selectedDay.getMonth()+'-'+props.selectedDay.getDate();
	let sortedTodos = props.todos.sort((a,b)=>Date.parse(date +' '+a.time)-Date.parse(date+' '+ b.time))


 return (
 <div>
 <h4>{props.selectedDay.getDate()} {nameOfMonth[props.selectedDay.getMonth()]} {props.selectedDay.getFullYear()}года, </h4>
 <h4> {nameOfDayWeek[props.selectedDay.getDay()]}</h4>
 <p></p>
 <p></p>
<ListGroup variant='flush'>
 {props.noPlans ? <h3>На этот день ничего не запланировано</h3> : sortedTodos.map(i=> <Todo time={i.time} title={i.title} deleteTodo={props.clickDelete}/>) }


 </ListGroup>
 </div>
 )
} 




