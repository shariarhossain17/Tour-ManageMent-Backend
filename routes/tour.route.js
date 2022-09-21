const router = require("express").Router();
const tourController = require('../controller/tour.controller')


router.route('/')
.post(tourController.createPost)


module.exports = router;