const mongoose = require("mongoose");

const companySchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    foundedOn: {
      type: Date,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    reviewAverage: {
      type: Number,
      default: 0,
    },
    totalReview: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const companyModel = mongoose.model("company", companySchema);

module.exports = companyModel;
