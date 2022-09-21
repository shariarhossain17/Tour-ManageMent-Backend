const Tour = require('../models/tourmanage.model')

exports.getTourModelById = async (id) => {
    const result = await Tour.findOneAndUpdate({id},{$inc:{"views":1}});
    return result;
};

exports.updateTourModelById = async (data,id) => {
const result = await Tour.updateOne({_id:id},{$set:data},{
        runValidators:true
    })
    return result;
}

exports.creteTourModel = async (data) => {
    const result = await Tour.create(data);
    return result;
}
