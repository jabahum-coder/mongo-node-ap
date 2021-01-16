
module.exports = (app) => {
    const listings = require('../controllers/listingsAndReviews.controllers');

    app.get("/api/v1/listings", listings.getAllListingsAndReviews);


    app.get("/api/v1/lists", listings.getAllLists);
}