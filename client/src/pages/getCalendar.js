import React from 'react'

 function getDay(date) {
	  let day = date.getDay();
      if (day === 0) day = 7; 
      return day - 1; 
	 }
	 
export default function getCalendar(data,selectedData = new Date()) {
	 let month = data.getMonth(); 
     let d = new Date(data.getFullYear(),data.getMonth());
	 let arr = []
	 
  
      for (let i = 0; i < getDay(d); i++) {
        arr.push({id:i, date:undefined, selected: false})
      }
  
      while(d.getMonth() === month) {
	         if (d.getDate( )=== selectedData.getDate()) {
				 arr.push({id:d.toString(), date:d.getDate(), selected:true})
			 }
			 else {
				arr.push({id:d.toString(), date:d.getDate(), selected:false})  
			 }
		           
        if (getDay(d) % 7 === 6) { // вс, последний день - перевод строки
          arr.push({date:'tr'});
        }
        d.setDate(d.getDate() + 1);
      }

      if (getDay(d) !== 0) {
        for (let i = getDay(d); i < 7; i++) {
          arr.push({id:arr.length, date:undefined, selected: false})
        }
      }

      return arr;	  
}