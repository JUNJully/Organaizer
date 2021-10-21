import React from 'react'
import {useState,useEffect} from 'react'
import {useRoutes} from './routes'
import {BrowserRouter} from 'react-router-dom'
import {TodoList} from './pages/TodoList' // компонент - список дел
import {CreateTodo} from './pages/CreateTodo' // компонет - форма для создания списка дел
import CalendarMonth from './pages/CalendarMonth' // компонент - календарь
import getCalendar from './pages/getCalendar' // вспомогательная функция для заполнения календаря числами
import ButtonShowOrCreateTL from './pages/ButtonShowOrCreateTL' // компонент - кнопка показа - создания списка дел
import MyModal from './pages/Modal'// компонет - модальное окно
import {Button,Container,Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import useHttp from './pages/http' // вспомогательная функция для отправки запросов


function App() {	
  const [dates,setDates] = useState(getCalendar(new Date())) // все даты календаря
  const [selectedDay, setSelectedDay] = useState(new Date()) // выбранная дата
  const [todos,setTodos] = useState([]) // список дел
  const [noPlans,setNoPlans] = useState(false) // наличие или отсутствие сохраненного списка дел на сервере
  const [time,setTime] = useState()// управление инпутом времени
  const [title,setTitle] = useState()// управление инпутом дела
  const [showTodoList,setShowTodoList] = useState(true)// загрузка существующего списка дел
  const [showCreate,setShowCreate] = useState(false)// скрыть или показать форму для создания списка дел
  const [modalShow,setModalShow] = useState(false)// модальное окно
  const [messageModal,setMessageModal] = useState('Какое-то сообщение')//сообщение с сервера для модального окна
 
  
  const routes = useRoutes()
  const {request,loading,error,clearError} = useHttp()
  const nameOfMonth = {0:'Январь', 1:'Февраль', 2:'Март', 3:'Апрель', 4:'Май', 5:'Июнь', 6:'Июль', 7:'Август', 8:'Сентябрь', 9:'Октябрь', 10:'Ноябрь', 11:'Декабрь'}
  

  function selectDay(id){
    setDates(
	dates.map(item => {
		if (item.id===id && item.date!==undefined) {
			item.selected=true;
		    setSelectedDay(new Date(item.id));			
		}
		else {item.selected=false}
		return item;
	}))
	setTodos([])
	setNoPlans(false)
	setShowCreate(false)
	setShowTodoList(true)
}
 function Left() {	
     let cd = new Date(selectedDay.getFullYear(),selectedDay.getMonth()-1,selectedDay.getDate())
	 console.log(cd)
	 setSelectedDay(cd)
	 setDates(getCalendar(cd,cd))	
     setTodos([])
     setNoPlans(false)
	 setShowTodoList(true)
 }
 
 function Right() {	
     let cd = new Date(selectedDay.getFullYear(),selectedDay.getMonth()+1,selectedDay.getDate())
	 console.log(cd)
	 setSelectedDay(cd)
	 setDates(getCalendar(cd,cd))
     setTodos([])
     setNoPlans(false)
	 setShowTodoList(true)
 }
 
async function showTodos() {
	 let body = {date:selectedDay.getFullYear()+'-'+selectedDay.getMonth()+'-'+selectedDay.getDate()}
	 let result = await request('/api/main/day','POST',body)
		   if (result.length === undefined) {
			   setNoPlans(true)
			   setTodos([])
			   setShowTodoList(false)
		   }
		   else {
			   setNoPlans(false)
			   setTodos(result)
		   }	   
 }

async function saveTodoList() {
	let body = {date:selectedDay.getFullYear()+'-'+selectedDay.getMonth()+'-'+selectedDay.getDate(),data:todos}
	let result = await request('/api/main/save','POST',body)	
	setMessageModal(result.message)
    setModalShow(true)
}

 function showCreateTodo() {
	 setNoPlans(!noPlans)
	 setShowCreate(true)
	
 }
 
 function onTimeChange (time) {
	 setTime(time)
 }
 
 function onTitleChange (title) {
	 setTitle(title)
 }
 
 function clickAdd() {
	 let todo = {time,title}
	 let array = todos
     array.push(todo)	
	 setTodos(array)
	 setTime('')
	 setTitle('')
 }
 
 function closeModal() {
	 setModalShow(false)
	 setShowCreate(false)
	 setShowTodoList(true)
 }
 
async function deleteTodo(todo){
	let body = ({date:selectedDay.getFullYear()+'-'+selectedDay.getMonth()+'-'+selectedDay.getDate(),time:todo.time,title:todo.title})
	let result = await request('/api/main/delete','POST',body)
	setTodos(result)
} 
  return ( 
  <div>
  <style type='text/css'>
  {`
  .btn-lr {
	  width:50%;
	  font-size:2em;
  }
  `}
  </style>
  <Container>
  <Row>
  <BrowserRouter>
 
  <Col xs={4}>
 
 <h1>{nameOfMonth[selectedDay.getMonth()]} {selectedDay.getFullYear()}</h1>
  <CalendarMonth dates={dates} onSelect={selectDay}/>
  <Button variant = 'lr' onClick={Left}>&larr;</Button><Button variant = 'lr' onClick={Right}>&rarr;</Button>
  
   </Col>
   <Col md='auto' className="mx-auto">
  
   <MyModal show={modalShow} message={messageModal} onHide={()=>setModalShow(false)}/>
   
  
  <TodoList selectedDay={selectedDay} todos={todos} clickDelete={deleteTodo} noPlans={noPlans}/>
		  {showCreate ?
		  <p>
		  <CreateTodo time={time} timeChange = {onTimeChange} title = {title} titleChange ={onTitleChange} saveTodoList={saveTodoList} clickAdd={clickAdd}/>
		  </p>
		  :<ButtonShowOrCreateTL show={showTodoList} showTodos={showTodos} showCreateTodo={showCreateTodo} isLoading={loading}/>}
	  
      
   {routes}
  
   </Col>

   </BrowserRouter>
   </Row>
   </Container>
 </div>
  );
}

export default App;

