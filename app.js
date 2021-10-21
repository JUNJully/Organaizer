const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const mainRouter = require('./routes/router.main')

const app = express()

app.use(express.json({extended:true}))
app.use(bodyParser.urlencoded({extended:false}))
app.use(mainRouter)


async function start (){
	try {
		await mongoose.connect('mongodb+srv://Julliya:153426@cluster0.tkqwp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
			useNewUrlParser: true, useUnifiedTopology: true
		})		
		app.listen(5000, ()=> console.log('Server has been started...'))
	}	
	
	catch(e) {
		console.log(e)
	}
}	

start()





