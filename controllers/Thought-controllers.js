const { Thoughts, User } = require('../models');

const thoughtsControllers = 
{
    getThoughts(req, res) {
        Thoughts.find()
            .then(userData => res.json(userData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);

            });
    },
    getSingleThought(req, res) {
        Thoughts.findOne({_id: req.params.thoughtId })
            .then(userData => res.json(userData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);

            });
    },
    addThought({ body}, res) {
        Thoughts.create(body)
        .then((dbThoughtData) => {
            return User.findOneAndUpdate(
                { _id: body.id },
                {$push: {thoughts: dbThoughtData._id } }
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
        Thoughts.findOneAndUpdate({_id: params.thoughtId}, {$set: body}, {new: true})
        .then(thoughtdata => {
            if(!thoughtdata){
                res.status(404).json({message: 'Nothing to see here'})
                return;
            } 
             res.json(thoughtdata)
        })     
        .catch(err => res.json(err));
    },

    deleteThought({params}, res,) {
        Thoughts.findAndDelete({ _id: params.thoughtId})
        .then(thoughtdata => {
            if (!thoughtdata) {
            res.status(404).json({ message: 'Empty thoughts.'});
            }
            return User.findOneAndUpdate(
                { _id: params.thoughtId },
                {$pull: {thoughts: params.thoughtId } }
            )
        })
    }, 
    addReaction(req, res) {           // THIS PART MIGHT BE WRONG. THOUGHT MIGHT BE THE FIND ONE AND ID MIGHT BE WRONG
       Thoughts.findOneAndUpdate(
           {_id: req.params.thoughtId},
           { $addToSet: {reactions: req.body}},
           {runValidators: true, new: true}
       ).then((dbThoughtData)=> {
           res.json(dbThoughtData)
       }).catch(err => res.json(err));
    },
    removeReaction({ params }, res) {
        Thoughts.findOneAndUpdate(
            { _id: params.thoughtId },
            { $pull: { reactions: { reactionId: params.reactionId } } },
            { new: true }
        )
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => res.json(err));
    }

 };

 module.exports = thoughtsControllers;