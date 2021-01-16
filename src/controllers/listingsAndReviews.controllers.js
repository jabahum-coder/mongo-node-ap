const listingsAndReviews = require('../models/listingsAndReviews.model');


exports.getAllListingsAndReviews = async (req, res) => {
    try {
        const page = req.query.page ? parseInt(req.query.page) : 1;
        const pagination = req.query.pagination ? parseInt(req.query.pagination) : 20;

        var startIndex = (page - 1) * pagination;
        var endIndex = page * pagination;

        if (endIndex < await listingsAndReviews.countDocuments().exec()) {
            var next = page + 1;
        }
        if (startIndex > 0) {
            var previous = page - 1;
        }

        if (pagination > 10) {
            pagination = 20
        }

        const listings = await listingsAndReviews.find({}).limit(pagination).skip(startIndex).exec();
        res.send({
            "status": "success",
            "next": next,
            "previous": previous,
            "pageSize": pagination,
            "data": listings
        });
    } catch (error) {
        console.log(error)
    }


}

exports.getAllLists = (req, res) => {
    listingsAndReviews.find({}, function (err, results) {
      console.log(results);
      if (err) {
        res.send(err);
      } else {
        res.send({
          status: "success",
          data: results,
        });
      }
    });
  };