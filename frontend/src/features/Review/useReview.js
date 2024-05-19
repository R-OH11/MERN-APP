import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { reviewDataObject } from "../../services/Controller";
import { toast } from "react-hot-toast";
import { isReviewAdded } from "./reviewSlice";

export function useCompanyReview() {
  const [reviewsData, setReviewsData] = useState([]);
  const getReviewsData = (companyId) => {
    reviewDataObject.companyReview(companyId, (result) => {
      if (result?.status === 200 && result?.data?.success) {
        setReviewsData(result?.data?.data?.reviews);
      } else {
        toast.error(result?.data?.message);
      }
    });
  };
  return { getReviewsData, reviewsData };
}

export function useCompanyDetails() {
  const [companyData, setcompanyData] = useState([]);

  const getCompanyData = (companyId) => {
    reviewDataObject.companyDetails(companyId, (result) => {
      console.log("companyDetails", result);
      if (result?.status === 200 && result?.data?.success) {
        setcompanyData(result?.data?.data);
      } else {
        toast.error(result?.data?.message);
      }
    });
  };

  return { getCompanyData, companyData };
}

export function useAddReview() {
  const dispatch = useDispatch();
  const isAdded = useSelector((state) => state.review.isReviewAdded);
  console.log("isAddedReview==>", isAdded);
  const addCompanyReview = (data, onCloseModal) => {
    reviewDataObject.addReview(data, (result) => {
      console.log("result", result);
      if (result?.status === 200 && result?.data?.success) {
        toast.success(result?.data?.message);
        onCloseModal();
        dispatch(isReviewAdded(!isAdded));
      } else {
        toast.error(result?.data?.message);
        onCloseModal();
      }
    });
  };
  return { addCompanyReview };
}
