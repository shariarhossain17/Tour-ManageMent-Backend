const Tour = require("../models/tourmanage.model");

/**
 *
 * @returns get all tour
 */
exports.getTourModel = async (queries) => {
  const result = await Tour.find({})
  .limit(queries.limit)
  .skip(queries.skip)
  .select(queries.field)
  .sort(queries.sortBy)
  return result;
};

/**
 * get tour by id
 * icreament tour in per request
 * @param {id} from tour controller
 * @returns
 */
exports.getTourModelById = async (id) => {
  const result = await Tour.findOneAndUpdate({ id }, { $inc: { views: 1 } });
  return result;
};

/**
 *
 * @returns trending tour
 */
exports.getTrendingTourModel = async () => {
  const result = await Tour.find().sort({ views: -1 }).limit(3);
  return result;
};
/**
 *
 * @returns cheapest tour
 */
exports.getCheapestTourModel = async () => {
  const result = await Tour.find().sort({ views: 1 }).limit(3);
  return result;
};

/**
 *
 * update  by id
 * @param {id} from tour controller
 * @param {data} from tour controller
 */

exports.updateTourModelById = async (data, id) => {
  const result = await Tour.updateOne(
    { _id: id },
    { $set: data },
    {
      runValidators: true,
    }
  );
  return result;
};

/**
 * create a tour
 * @param {data} from tour controller
 * @returns
 */
exports.creteTourModel = async (data) => {
  const result = await Tour.create(data);
  return result;
};
