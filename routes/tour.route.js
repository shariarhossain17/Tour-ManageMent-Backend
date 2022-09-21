const router = require("express").Router();
const tourController = require('../controller/tour.controller')


router.route('/')
.post(tourController.createPost)



router.route("/:id")
.get(tourController.getTourById)


module.exports = router;