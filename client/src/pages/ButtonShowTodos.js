import React from 'react'
import {Button} from 'react-bootstrap'


export default function ButtonShowTodos({loading,showTodos}) {
  
  function handleClick() {
	  showTodos()
  }
  
  return (
  <div>
  <style>
  {`.btn-basic{
	background:rgb(230,230,250);
	border:1px solid grey;
	  
  }`}
  </style>
    <Button variant='basic' size='lg'
      disabled={loading}
      onClick={!loading ? handleClick : null}
    >
      {loading ? 'Загрузка…' : 'Показать список дел'}
    </Button>
  </div>
  );
}