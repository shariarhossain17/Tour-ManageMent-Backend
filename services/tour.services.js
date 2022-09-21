const Tour = require('../models/tourmanage.model')

exports.getTourModelById = async (id) => {
    const result = await Tour.findOneAndUpdate({id},{$inc:{"views":1}});
    return result;
}
exports.creteTourModel = async (data) => {
    const result = await Tour.create(data);
    return result;
}