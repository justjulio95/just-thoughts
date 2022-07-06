const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  addFriend,
  removeFriend,
  createUser,
  updateUser,
  deleteUser
} = require('../../controllers/user-controller');

// GET and POST routes '/api/users
router
  .route('/')
  .get(getAllUsers)
  .post(createUser)

// Get SINGLE, Update, and DELETE '/api/users/:id'
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser)

// set up to /api/users/:userId/friends/:friendId
router
  .route('/:id/friends/:friendId')
  .post(addFriend)
  .delete(removeFriend)

module.exports = router;