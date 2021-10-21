const { Thoughts, User } = require('../models');

const userControllers = {
    getAllUser(req, res) {
        User.find ({})
    
        .then(userData => res.json(userData))
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
   
        });
    },

 getSingleUser = ({ params}, res) {
     User.findOne({ _id: params.id})
     .then(userData => res.json (userData))
     .catch(err => {
         console.log(err)
         res.sendStatus(400);
     })
     .populate({
         path: 'thoughts',
         select: '-__v'
     })
     .populate({ path: 'friends'})
     .then(dbUserData => res.json (dbUserData))
     .catch(err => {
     console.log (err);
     res.sendStatus(400);
     
   });
   updateUser({params, body,} res){
       User.findOneAndUpdate({_id: params.id_}, body, {new: true})
       .then(userData => {
           if(!userData){
               res.status(404).json({ message: 'Invalid Id ' })
           }
           res.json(userData)
       })
       .catch(err => res.status(400).json(err))
    }
     
    deleteUser({params}, res){
        User.findOneAndDelete({_id: params.id})
        .then(userData => {
                if(!userData){
                    res.status(404).json({ message: 'Invalid Id ' })
                }
                res.json(userData)
        })
            .catch(err => res.status(400).json(err))
        }

    }
 .post('/submit', ({ body }, res) => {
    Note.create(body)
      .then(dbNote => {
        res.json(dbNote);
      })
      .catch(err => {
        res.json(err);
      });
  });