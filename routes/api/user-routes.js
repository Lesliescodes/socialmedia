const { Thoughts, User } = require('../models');
// const router = require('express').Router();
const {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    getSingleUser,
},
const { Router } = require('express');
const { Thoughts, User } = require('../models');

require.controls ('../../controllers/User-controllers'),

router
    .route('/')
    .get(getUsers)
    .post(createUser);

router
    .route('/:id')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);

module.exports = router;
