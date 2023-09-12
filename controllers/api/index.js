const router = require('express').Router();

const userRoutes = require('./user-routes');
router.use('/users', userRoutes);


const blogRoutes = require('./post-routes');
router.use('/posts', blogRoutes)

const commentRoutes = require('./comment-routes')
router.use("/comment", commentRoutes )

module.exports = router;