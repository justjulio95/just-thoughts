const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  addThought,
  updateThought,
  removeThought
} = require('../../controllers/thought-controller');

// set up to /api/thoughts/
router
  .route('/')
  .get(getAllThoughts)

router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)

// set up to /api/thoughts/:userId
router
  .route('/:userId')
  .post(addThought)

// set up to /api/:userId/:thoughtId
router
  .route('/:userId/:thoughtId')
  .delete(removeThought)

module.exports = router;