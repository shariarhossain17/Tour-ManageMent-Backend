const router = require("express").Router();
const tourController = require('../controller/tour.controller')






router.route("/tour/trending")
.get(tourController.getTrendingTour)


router.route("/tour/cheapest")
.get(tourController.getCheapestTour)

router.route('/tours')
.post(tourController.createPost)
.get(tourController.getTour)



router.route("/tours/:id")
.get(tourController.getTourById)
.patch(tourController.updateById)


module.exports = router;