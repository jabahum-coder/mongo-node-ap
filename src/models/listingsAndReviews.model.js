let mongoose = require('mongoose')

var listingsAndReviewsSchema = new mongoose.Schema({
    listing_url: String,
    name: String,
    interaction: String,
    house_rules: String,
    property_type: String,
    room_type: String,
    bed_type: String,
    minimum_nights: String,
    maximum_nights: String,
    cancellation_policy: String,
    last_scraped: Date,
    calendar_last_scraped: Date,
    first_review: Date,
    last_review: Date,
    accommodates: Number,
    bedrooms: Number,
    beds: Number,
    number_of_reviews: Number,
    bathrooms: mongoose.Types.Decimal128,
    amenities: Array,
    price: mongoose.Types.Decimal128,
    security_deposit: mongoose.Types.Decimal128,
    cleaning_fee: mongoose.Types.Decimal128,
    extra_people: mongoose.Types.Decimal128,
    guests_included: mongoose.Types.Decimal128,
    images: Object,
    host: Object,
    address: Object,
    availability: Object,
    review_scores: Object,
    reviews: Array

});

module.exports = mongoose.model('listingsAndReview', listingsAndReviewsSchema)