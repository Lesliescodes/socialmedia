const router = require('express').Router();



const {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    getSingleUser,
    addFriend,
    deleteFriend,
}=require('../../controllers/User-controllers')

router
    .route('/')
    .get(getUsers)
    .post(createUser);

router
    .route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);

router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);

module.exports = router;
