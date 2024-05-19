const express = require("express");
const router = express.Router();
const companyController = require("../controller/companyController");
const upload = require("../middleware/multerMiddleware");

router.post(
  "/createCompany",
  upload.single("image"),
  companyController.createCompany
);

router.get("/companyList", companyController.getAllCompany);

router.get("/companyDetail/:companyId", companyController.getOneCompany);

router.post("/addReview", companyController.addReview);

router.get("/reviews/:companyId", companyController.getCompanyReviews);

module.exports = router;
