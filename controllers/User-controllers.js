const {  User } = require('../models');

const userControllers = {
    getUsers(req, res) {
        User.find()
            .select('-__v')
            .then(userData => res.json(userData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);

            });
    },
    getSingleUser({ params }, res) {
        User.findOne({ _id: params.userId })
            .select('-__v')
            .populate('friends')
            .populate('thoughts')
            .then(userData => res.json(userData))
            .catch(err => {
                console.log(err)
                res.sendStatus(400);
            });
    },
    createUser(req, res) {
        User.create(req.body).then((dbUserData) => {
            res.json(dbUserData)
        }).catch(err => {
            console.log(err)
            res.sendStatus(400);
        });
    },
    updateUser({ params, body }, res) {
        User.findOneAndUpdate(
            { _id: params.userId },
            { $set: body },
            {
                runValidators: true,
                new: true
            })
            .then(userData => {
                if (!userData) {
                    res.status(404).json({ message: 'Invalid Id ' })
                }
                res.json(userData)
            })
            .catch(err => res.status(400).json(err))
    },

    deleteUser({ params }, res) {
        User.findOneAndDelete(
            {
                _id: params.userId
            }
        )
            .then(userData => {
                if (!userData) {
                    res.status(404).json({ message: 'Invalid Id ' })
                }
                res.json(userData)
            })
            .catch(err => res.status(400).json(err))
    },
  // was req res changed to copy update user 
    addFriend({params}, res){
        User.findOneAndUpdate(
            { _id: params.userId },
            { $addToSet: { friends: params.friendId} },
            {
                runValidators: true,
                new: true
            })
            .then(userData => {
                if (!userData) {
                    res.status(404).json({ message: 'Invalid Id ' })
                }
                res.json(userData)
            })
            .catch(err => res.status(400).json(err))
    },
    deleteFriend({ params }, res) {
        User.findOneAndUpdate(
            {
                _id: params.userId
            },
            { $pull: { friends: params.friendId } },
            { new: true }
        )
            .then(userData => {
                if (!userData) {
                    res.status(404).json({ message: 'Invalid Id ' })
                }
                res.json(userData)
            })
            .catch(err => res.status(400).json(err))
    },

}

module.exports = userControllers