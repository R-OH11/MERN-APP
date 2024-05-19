import React, { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import { Input } from "../../ui/Input";
import { Text } from "../../ui/Text";
import { Button } from "../../ui/Button";
import { useForm, Controller } from "react-hook-form";
import { formatHtmlMaxDate } from "../../utils/helpers";
import ProfilePicture from "../../ui/ProfilePicture";
import { useAddCompany } from "./useCompany";
function AddCompanyForm({ onCloseModal }) {
  const [companyProfilePic, setCompanyProfilePic] = useState([]);
  const [companyPictureError, setCompanyPictureError] = useState("");
  const { addCompany } = useAddCompany();

  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    mode: "onTouched",
  });
  function onSubmit() {
    const companyName = getValues("companyName");
    const location = getValues("location");
    const foundedOn = getValues("foundedOn");
    const city = getValues("city");

    if (companyProfilePic.length === 0) {
      setCompanyPictureError("Please select the company profile picture");
      return;
    }

    if (!companyName || !location || !foundedOn || !city) return;

    const formData = new FormData();

    formData.append("companyName", companyName);
    formData.append("location", location);
    formData.append("foundedOn", new Date(foundedOn));
    formData.append("city", city);
    formData.append("image", companyProfilePic);

    addCompany(formData, onCloseModal);
  }
  const getProfilePicture = useCallback((picture) => {
    setCompanyProfilePic(picture);
  }, []);
  return (
    <div className="w-full">
      <div className="flex items-start justify-between gap-5 bg-white-A700_01 p-10 sm:flex-col sm:p-5">
        <div className="my-[11px] ml-[40px] w-[80%] md:ml-0 md:w-full sm:w-full">
          <div className="flex flex-col gap-[35px]">
            <div className="flex flex-col gap-[31px]">
              <div className="flex flex-col">
                <div className="flex items-center justify-center">
                  <Text size="7xl" as="p" className=" !text-black-900_01">
                    Add Company
                  </Text>
                </div>
              </div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex w-full flex-col items-center justify-center gap-[15px]"
              >
                <div className="mt-8 flex w-full flex-col items-center justify-center">
                  <Text size="lg" as="p" className="self-start">
                    Company Logo
                  </Text>
                  <ProfilePicture getProfilePicture={getProfilePicture} />
                  {companyPictureError && (
                    <span className="w-full text-center text-sm text-red-A700">
                      {companyPictureError}
                    </span>
                  )}
                </div>
                <div className="flex w-full flex-col gap-2">
                  <Text size="lg" as="p" className="">
                    Company name
                  </Text>
                  <Controller
                    name="companyName"
                    control={control}
                    rules={{
                      required: "Company name is required",
                      pattern: {
                        value:
                          /^[a-zA-Z\s!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/,
                        message: "Please enter a valid company name",
                      },
                    }}
                    render={({ field }) => (
                      <Input
                        {...field}
                        shape="round"
                        size="md"
                        type="text"
                        name="companyName"
                        placeholder={`Enter company name`}
                        className={
                          errors?.companyName
                            ? "gap-2.5 border border-red-A700 font-light  !text-red-A700 sm:pr-5"
                            : "gap-2.5 border border-gray-500_02 font-light !text-black-900_01 sm:pr-5"
                        }
                        error={errors?.companyName?.message}
                      />
                    )}
                  />
                </div>
                <div className="flex w-full flex-col gap-2">
                  <Text size="lg" as="p">
                    Location
                  </Text>
                  <Controller
                    name="location"
                    control={control}
                    rules={{
                      required: "Location is required",
                    }}
                    render={({ field }) => (
                      <Input
                        {...field}
                        shape="round"
                        size="md"
                        type="text"
                        name="location"
                        placeholder={`Enter company's location`}
                        className={
                          errors?.location
                            ? "gap-2.5 border border-red-A700 font-light  !text-red-A700 sm:pr-5"
                            : "gap-2.5 border border-gray-500_02 font-light !text-black-900_01 sm:pr-5"
                        }
                        error={errors?.location?.message}
                      />
                    )}
                  />
                </div>
                <div className="flex w-full flex-col gap-2">
                  <Text size="lg" as="p">
                    Founded on
                  </Text>
                  <Controller
                    name="foundedOn"
                    control={control}
                    rules={{
                      required: "Company foundation date is required",
                    }}
                    render={({ field }) => (
                      <Input
                        {...field}
                        shape="round"
                        size="md"
                        type="date"
                        maxDate={formatHtmlMaxDate(new Date())}
                        name="foundedOn"
                        placeholder={`Enter foundation date`}
                        className={
                          errors?.foundedOn
                            ? "gap-2.5 border border-red-A700 font-light  !text-red-A700 sm:pr-5"
                            : "gap-2.5 border border-gray-500_02 font-light !text-black-900_01 sm:pr-5"
                        }
                        error={errors?.foundedOn?.message}
                      />
                    )}
                  />
                </div>
                <div className="flex w-full flex-col gap-2">
                  <Text size="lg" as="p">
                    City
                  </Text>
                  <Controller
                    name="city"
                    control={control}
                    rules={{
                      required: "City is required",
                    }}
                    render={({ field }) => (
                      <Input
                        {...field}
                        shape="round"
                        size="md"
                        type="text"
                        name="city"
                        placeholder={`Enter city`}
                        className={
                          errors?.city
                            ? "gap-2.5 border border-red-A700 font-light  !text-red-A700 sm:pr-5"
                            : "gap-2.5 border border-gray-500_02 font-light !text-black-900_01 sm:pr-5"
                        }
                        error={errors?.city?.message}
                      />
                    )}
                  />
                </div>
                <br />
                <Button
                  variant="fill"
                  shape="round"
                  type="submit"
                  className="w-[50%] font-medium !shadow-sm sm:px-5"
                >
                  Save
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCompanyForm;
