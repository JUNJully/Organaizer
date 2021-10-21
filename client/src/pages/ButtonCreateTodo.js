import React from 'react'
import {Button} from 'react-bootstrap'


export default function ButtonCreateTodo({showCreateTodo}) {
    
  return (
  <div>
  <style>
  {`.btn-basic{
	background:rgb(230,230,250);
	border:1px solid grey;
	  
  }`}
  </style>
    <Button variant='basic' size='lg' onClick={showCreateTodo}>
      Создать список дел
    </Button>
  </div>
  );
}