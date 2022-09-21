const { creteTourModel } = require("../services/tour.services")

module.exports.createPost =async (req,res,next) => {
    try {
        const result = await creteTourModel(req.body)
        res.status(200).json({
            status:true,
            message:"data insert success",
            result:result,
        })
    } catch (error) {
        res.status(400).json({
            status:false,
            message:"data insert failed",
            message:error.message
        })
    }
};