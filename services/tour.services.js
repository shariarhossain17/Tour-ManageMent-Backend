const Tour = require('../models/tourmanage.model')

exports.creteTourModel = async (data) => {
    const result = await Tour.create(data);
    return result;
}