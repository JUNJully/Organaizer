const {Schema,model} = require('mongoose')

const todo = new Schema({
	date: {type:String, required:true},
	time: {type:String, required:true},
	title:{type:String, required:true}
})


module.exports = model('Todo',todo)