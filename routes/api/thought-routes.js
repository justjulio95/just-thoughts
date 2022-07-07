const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  addThought,
  addReaction,
  updateThought,
  removeReaction,
  removeThought
} = require('../../controllers/thought-controller');

// set up to /api/thoughts/
router
  .route('/')
  .get(getAllThoughts)

// set up to /api/thoughts/:id
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought)

// set up to /api/thoughts/:userId
router
  .route('/:userId')
  .post(addThought)

// set up to /api/thoughts/:userId/:thoughtId
router
  .route('/:id/reactions')
  .put(addReaction)

// set up to /api/thoughts/:id/:reactionId
router
  .route('/:id/:reactionId')
  .delete(removeReaction);

module.exports = router;