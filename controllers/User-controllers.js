const { Thoughts, User } = require('../models');

getSingleUser({ params}, res) {
     User.findOne({ _id: params.id})
     .then(userData => res.json (userData))
     .catch(err => {
         console.log(err);
         res.sendStatus(400);
     })
 },



const userControllers = {
 getAllUser(req, res) {
     User.find ({})
     .then(userData => res.json(userData))
     .catch(err => {
         console.log(err);
         res.sendStatus(400);

     });
 },