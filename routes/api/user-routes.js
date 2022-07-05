const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
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

module.exports = router;