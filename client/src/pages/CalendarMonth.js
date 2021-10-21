import React from 'react'
import Cell from './Cell'
import {Table} from 'react-bootstrap'

export default function CalendarMonth(props) {
	return (
	<div>
	<style type='text/css'>
	{`
	.table-basic {
		border-collapse:collapse;
	}
	td{
		border:1px solid grey;
		font-size:1.5em;
		text-align:center;
		font-color:grey;
	}
	thead{
		background:rgb(230,230,250);
	}
	`}
	</style>
	<Table variant='basic'>
	<thead>
	<tr><td>пн</td><td>вт</td><td>ср</td><td>чт</td><td>пт</td><td>сб</td><td>вс</td></tr>
	</thead>
	<tbody>
	{props.dates.map(item => {return item.date === 'tr' ? <tr></tr> :<Cell date = {item} key = {item.id} onClick={props.onSelect}/>})}
		</tbody>
	</Table>
	</div>
	)
}