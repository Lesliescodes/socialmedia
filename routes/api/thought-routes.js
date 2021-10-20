const router = require('express').Router();

const{

addThought,
updateThought,
deleteThought,

} = require('../../controllers/Thought-controllers');

router 
.route ('/')
.get(getAllThoughts)
.post(addThought)


router
.route ('/:id')
.delete (deleteThought)