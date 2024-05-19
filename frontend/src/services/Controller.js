import axios from "axios";
const BASE_URL = import.meta.env.VITE_REACT_API_BASE_URL;

export const companyDataObject = {
  companyList: async (data, callback) => {
    axios({
      method: "GET",
      url: `${BASE_URL}company/companyList?companyName=${data.companyName}&sortBy=${data.sortBy}&location=${data.location}`,
    })
      .then((response) => {
        return callback(response);
      })
      .catch((err) => {
        return callback(err.response);
      });
  },

  addCompany: async (data, callback) => {
    axios({
      method: "POST",
      url: `${BASE_URL}company/createCompany`,
      data: data,
    })
      .then((response) => {
        return callback(response);
      })
      .catch((err) => {
        console.log("err==>", err);
        return callback(err.response);
      });
  },
};

export const reviewDataObject = {
  companyReview: async (companyId, callback) => {
    axios({
      method: "GET",
      url: `${BASE_URL}company/reviews/${companyId}`,
    })
      .then((response) => {
        return callback(response);
      })
      .catch((err) => {
        return callback(err.response);
      });
  },

  companyDetails: async (companyId, callback) => {
    axios({
      method: "GET",
      url: `${BASE_URL}company/companyDetail/${companyId}`,
    })
      .then((response) => {
        return callback(response);
      })
      .catch((err) => {
        return callback(err.response);
      });
  },

  addReview: async (data, callback) => {
    axios({
      method: "POST",
      url: `${BASE_URL}company/addReview`,
      data: data,
    })
      .then((response) => {
        return callback(response);
      })
      .catch((err) => {
        console.log("err==>", err);
        return callback(err.response);
      });
  },
};
