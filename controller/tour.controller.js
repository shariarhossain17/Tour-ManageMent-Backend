const {
  creteTourModel,
  getTourModelById,
  updateTourModelById,
  getTrendingTourModel,
  getCheapestTourModel,
} = require("../services/tour.services");


/**
 * 
 * update tour by id
 * @param {data} req.body
 */
module.exports.getTourById = async (req, res, next) => {
  try {
    const result = await getTourModelById(req.params.id);
    res.status(200).json({
      status: true,
      message: "data get success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "data get  failed",
      message: error.message,
    });
  }
};

/**
 * 
 * get 3 trending tour 
 */
module.exports.getTrendingTour = async (req, res, next) => {
  try {
    const result = await getTrendingTourModel();
    res.status(200).json({
      status: true,
      message: "data get success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "data get failed",
      message: error.message,
    });
  }
};
/**
 * 
 * get 3 cheapest tour 
 */
module.exports.getCheapestTour = async (req, res, next) => {
  try {
    const result = await getCheapestTourModel();
    res.status(200).json({
      status: true,
      message: "data get success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "data get failed",
      message: error.message,
    });
  }
};




/**
 * 
 * create tour
 * @param {data} req.body
 */

module.exports.createPost = async (req, res, next) => {
  try {
    const result = await creteTourModel(req.body);
    res.status(200).json({
      status: true,
      message: "data insert success",
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "data insert failed",
      message: error.message,
    });
  }
};

/**
 * 
 * update  by id
 * @param {id} req.params 
 * @param {data} req.body
 */
module.exports.updateById = async (req, res, next) => {
  try {
    const result = await updateTourModelById(req.body, req.params.id);

    res.status(200).json({
      status: true,
      message: "update success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "update failed",
      message: error.message,
    });
  }
};
