const {Router} = require('express')
const Todo = require('../models/Todo')
const router = Router()


router.post('/api/main/day', async (req,res)=>{
	try {
		const todos = await Todo.find({date:req.body.date})
	if (todos.length === 0) {
		return res.status(200).json({message: 'На этот день ничего не запланировано'})
	}
	res.status(200).json(todos) 
	}
	catch(e) {
		res.status(500).json({message:'Something wrong, try again'})
	}	  	
})



router.post('/api/main/save', async (req,res)=>{
	try {
	  await req.body.data.map(async function(item) {
			let exist = await Todo.findOne({date:req.body.date,time:item.time,title:item.title})
			if (!exist) {await new Todo({date:req.body.date,time:item.time,title:item.title}).save()}
		})	
	    res.status(201).json({message:'Список сохранен'})	
	}
	catch(e) {
		res.status(500).json({message:'Something wrong, try again'})
	}

})

router.post('/api/main/delete', async (req,res)=>{
	try {
	await Todo.findOneAndDelete({date:req.body.date,time:req.body.time,title:req.body.title})
	const todos = await Todo.find({date:req.body.date})
	res.status(200).json(todos)
	}
	catch(e) {
		res.status(500).json({message:'Something wrong, try again'})
	}
})
module.exports = router