const express = require("express");

const reviewController = require("../controllers/reviewController");

const router = express.Router({ mergeParams: true });

router.get("/", reviewController.fetchAllReviews);

router.get("/filter", reviewController.filterReviews);

// Getting reviews based on a provided search query
router.get("/search", reviewController.searchReviews);

module.exports = router;
