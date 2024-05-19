import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { companyDataObject } from "../../services/Controller";
import { toast } from "react-hot-toast";
import { isCompanyAdded } from "./companySlice";

export function useCompaniesData() {
  const headerData = useSelector((state) => state?.company);

  const [companiesData, setCompaniesData] = useState([]);
  const data = {
    companyName: headerData.search,
    sortBy: headerData.sortBy?.value,
    location: headerData.cityName,
  };
  const getCompanyListData = () => {
    companyDataObject.companyList(data, (result) => {
      if (result?.status === 200 && result?.data?.success) {
        setCompaniesData(result?.data?.data?.company);
      } else {
        toast.error(result?.data?.message);
      }
    });
  };

  useEffect(() => {
    getCompanyListData();
  }, [headerData]);

  return { getCompanyListData, companiesData };
}

export function useAddCompany() {
  const dispatch = useDispatch();
  const isAdded = useSelector((state) => state?.company?.isCompanyAdded);
  const addCompany = (formData, onCloseModal) => {
    companyDataObject.addCompany(formData, (result) => {
      if (result?.status === 200 && result?.data?.success) {
        toast.success(result?.data?.message);
        onCloseModal();
        dispatch(isCompanyAdded(!isAdded));
      } else {
        toast.error(result?.data?.message);
        onCloseModal();
      }
    });
  };
  return { addCompany };
}
