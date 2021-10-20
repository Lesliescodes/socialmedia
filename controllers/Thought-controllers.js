const { Thoughts, User } = require('../models');

const thoughtsControllers = 
{
    addThought({params, body}, res) {
        console.log (params);
        Thoughts.create(body)
        
        .then(({ _id }) => {
            return User.findOneAndUpdate (
                { _id: params.id },
                {$push: {thoughts: _id } }
            )
     
        })
        .then(thoughtdata => {
            if (!thoughtdata) {
                res.status(404).json({ message: 'are you even thinking?'})
                return;
            }
            res.json(thoughtdata)
        } )
            .catch(err => res.json(err));
        
    },

    updateThought({params, body}, res) {
        Thoughts.findOneAndUpdate({_id: params.id}, body, {new: true})
        .then(thoughtdata => {
            if(!thoughtdata){
                res.status(404).json({message: 'Nothing to see here'})
                return;
            } 
             res.json(thoughtdata)
        }  )
                 
        .catch(err => res.json(err));
    },

    deleteThought({params}, res,) {
        Thoughts.findAndDelete({ _id: params.id})
        .then(thoughtdata => {
            if (!thoughtdata) {
            res.status(404).json({ message: 'Empty thoughts.'});
            }
        })
    }

 }

 module.exports = thoughtControllers;