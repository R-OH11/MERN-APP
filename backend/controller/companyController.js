const companyModel = require("../model/companyModel");
const reviewModel = require("../model/reviewModel");

// create company
const createCompany = async (req, res) => {
  try {
    req.body.image = req.file.path;
    const company = await companyModel.create(req.body);
    res.status(200).json({
      success: true,
      message: "company created successfully",
      data: { company },
    });
  } catch (error) {
    console.log("error", error);
    res.status(400).json({
      success: false,
      message: "something went wrong",
      data: null,
    });
  }
};

// get all company
// get all company
const getAllCompany = async (req, res) => {
  try {
    const { companyName, sortBy, location } = req.query;

    const query = {};

    // Filter by companyName
    if (companyName) {
      query.companyName = { $regex: companyName, $options: "i" };
    }

    if (location) {
      query.city = { $regex: location, $options: "i" };
    }

    let sortOptions = {};

    // Sort by companyName
    if (sortBy === "companyName") {
      sortOptions.companyName = 1;
    } else if (sortBy === "reviewAverage") {
      sortOptions.reviewAverage = -1;
    }
    sortOptions.createdAt = -1;

    const company = await companyModel.aggregate([
      { $match: query },
      {
        $lookup: {
          from: "reviews",
          localField: "_id",
          foreignField: "companyId",
          as: "reviews",
        },
      },
      { $addFields: { totalNumberReviews: { $size: "$reviews" } } },
      { $project: { reviews: 0 } },
      { $sort: sortOptions },
    ]);

    res.status(200).json({
      success: true,
      message: "company fetched successfully",
      data: { company },
    });
  } catch (error) {
    console.log("error", error);
    res.status(400).json({
      success: false,
      message: "something went wrong",
      data: null,
    });
  }
};

// get one company
const getOneCompany = async (req, res) => {
  try {
    const { companyId } = req.params;
    const company = await companyModel.findOne({ _id: companyId });

    const totalReview = await reviewModel.countDocuments({ companyId });

    res.status(200).json({
      success: true,
      message: "company fetched successfully",
      data: { company, totalReview },
    });
  } catch (error) {
    console.log("error", error);
    res.status(400).json({
      success: false,
      message: "something went wrong",
      data: null,
    });
  }
};

// add review
const addReview = async (req, res) => {
  try {
    const review = await reviewModel.create(req.body);

    const companyFound = await companyModel.findOne({
      _id: req.body.companyId,
    });

    const totalReview = req.body.rating + companyFound.totalReview;

    const totalReviewer = await reviewModel.countDocuments({
      companyId: req.body.companyId,
    });

    function calculateReviewAverage(totalReviews, totalPeople) {
      const average = totalReviews / totalPeople;
      const roundedAverage = Math.round(average * 2) / 2;
      return roundedAverage;
    }
    const reviewAverage = calculateReviewAverage(totalReview, totalReviewer);

    await companyModel.findOneAndUpdate(
      { _id: req.body.companyId },
      { $set: { totalReview, reviewAverage } }
    );
    res.status(200).json({
      success: true,
      message: "review added successfully",
      data: { review },
    });
  } catch (error) {
    console.log("error", error);
    res.status(400).json({
      success: false,
      message: "something went wrong",
      data: null,
    });
  }
};

// get company reviews
const getCompanyReviews = async (req, res) => {
  try {
    const { companyId } = req.params;

    const reviews = await reviewModel.find({ companyId });
    res.status(200).json({
      success: true,
      message: "reviews fetched successfully",
      data: { reviews },
    });
  } catch (error) {
    console.log("error", error);
    res.status(400).json({
      success: false,
      message: "something went wrong",
      data: null,
    });
  }
};

module.exports = {
  createCompany,
  getAllCompany,
  getOneCompany,
  addReview,
  getCompanyReviews,
};
