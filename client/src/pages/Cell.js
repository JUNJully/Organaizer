import React from 'react'

export default function Cell({date, onClick}){
	return (
	<td 
	className={date.selected ? 'selectedDay':''}
	onClick = {()=>onClick(date.id)}>
	{date.date === undefined ? '': date.date}
	</td>
	)
}