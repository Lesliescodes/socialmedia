const { Thoughts, User } = require('../models');

const userControllers = {
 getAllUser(req, res) {
     User.find ({})
     .then(userData => res.json(userData))
     .catch(err => {
         console.log(err);
         res.sendStatus(400);

     });
 }
}