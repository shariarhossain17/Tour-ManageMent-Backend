const { creteTourModel, getTourModelById, updateTourModelById } = require("../services/tour.services")


module.exports.getTourById = async (req,res,next) => {
    try {
        const result = await getTourModelById(req.params.id)
        res.status(200).json({
            status:true,
            message:"data get success",
            data:result
        })
    } catch (error) {
        res.status(400).json({
            status:false,
            message:"data get  failed",
            message:error.message
        })
    }
};

module.exports.createPost =async (req,res,next) => {
    try {
        const result = await creteTourModel(req.body)
        res.status(200).json({
            status:true,
            message:"data insert success",
        })
    } catch (error) {
        res.status(400).json({
            status:false,
            message:"data insert failed",
            message:error.message
        })
    }
};
module.exports.updateById =async (req,res,next) => {
    try {
        const result = await updateTourModelById(req.body,req.params.id)
        res.status(200).json({
            status:true,
            message:"update success",
        })
    } catch (error) {
        res.status(400).json({
            status:false,
            message:"update failed",
            message:error.message
        })
    }
};