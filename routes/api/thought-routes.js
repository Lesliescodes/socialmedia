const router = require('express').Router();

const {
    getSingleThought,
    addThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction,
    getThoughts
} = require('../../controllers/Thought-controllers');

router
    .route('/')
    .get(getThoughts)
    .post(addThought)


router
    .route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);
router
    .route('/:thoughtId/reactions/:reactionId')
    .post(addReaction)
    .delete(removeReaction);

    module.exports = router;