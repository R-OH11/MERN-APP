import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Input } from "../../ui/Input";
import { Text } from "../../ui/Text";
import { Button } from "../../ui/Button";
import { useForm, Controller } from "react-hook-form";
import { TextArea } from "../../ui/TextArea";
import StarReview from "../../ui/starReview";
import { useAddReview } from "./useReview";
function AddReviewForm({ onCloseModal }) {
  const { companyId } = useParams();
  const reviewId = companyId;
  const reviewRating = useSelector((state) => state?.review?.rating);
  const { addCompanyReview } = useAddReview();
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
    watch,
    unregister,
    reset,
  } = useForm({
    mode: "onTouched",
  });
  function onSubmit() {
    const fullName = getValues("fullName");
    const subject = getValues("subject");
    const description = getValues("description");
    const companyId = reviewId;
    const rating = reviewRating;

    if (!fullName || !subject || !description || !companyId) return;
    const body = {
      fullName,
      subject,
      description,
      companyId,
      rating,
    };
    addCompanyReview(body, onCloseModal);
  }

  return (
    <div className="w-full">
      <div className="flex items-start justify-between gap-5 bg-white-A700 p-10 sm:flex-col sm:p-5">
        <div className="my-[11px] ml-[40px] w-[80%] md:ml-0 md:w-full sm:w-full">
          <div className="flex flex-col gap-[35px]">
            <div className="flex flex-col gap-[31px]">
              <div className="flex flex-col">
                <div className="flex items-center justify-center">
                  <Text size="7xl" as="p" className=" !text-black-900_01">
                    Add Review
                  </Text>
                </div>
              </div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex w-full flex-col items-center justify-center gap-[15px]"
              >
                <div className="flex w-full flex-col gap-2">
                  <Text size="lg" as="p" className="">
                    Full Name
                  </Text>
                  <Controller
                    name="fullName"
                    control={control}
                    rules={{
                      required: "Full Name is required",
                      pattern: {
                        value: /^[a-zA-Z\s]*$/,
                        message: "Please enter a valid Name",
                      },
                    }}
                    render={({ field }) => (
                      <Input
                        {...field}
                        shape="round"
                        size="md"
                        type="text"
                        name="fullName"
                        placeholder={`Enter your full name`}
                        className={
                          errors?.fullName
                            ? "gap-2.5 border border-red-A700 font-light  !text-red-A700 sm:pr-5"
                            : "gap-2.5 border border-gray-500_02 font-light !text-black-900_01 sm:pr-5"
                        }
                        error={errors?.fullName?.message}
                      />
                    )}
                  />
                </div>
                <div className="flex w-full flex-col gap-2">
                  <Text size="lg" as="p">
                    Subject
                  </Text>
                  <Controller
                    name="subject"
                    control={control}
                    rules={{
                      required: "Subject is required",
                    }}
                    render={({ field }) => (
                      <Input
                        {...field}
                        shape="round"
                        size="md"
                        type="text"
                        name="subject"
                        placeholder={`Enter review subject`}
                        className={
                          errors?.subject
                            ? "gap-2.5 border border-red-A700 font-light  !text-red-A700 sm:pr-5"
                            : "gap-2.5 border border-gray-500_02 font-light !text-black-900_01 sm:pr-5"
                        }
                        error={errors?.subject?.message}
                      />
                    )}
                  />
                </div>
                <div className="flex w-full flex-col gap-2">
                  <Text size="lg" as="p">
                    Description
                  </Text>
                  <Controller
                    name="description"
                    control={control}
                    rules={{
                      required: "Description is required",
                    }}
                    render={({ field }) => (
                      <TextArea
                        {...field}
                        shape="round"
                        size="sm"
                        type="text"
                        name="description"
                        placeholder={`Enter description`}
                        className={
                          errors?.description
                            ? "gap-2.5 border border-red-A700 font-light  !text-red-A700 sm:pr-5"
                            : "gap-2.5 border border-gray-500_02 font-light !text-black-900_01 sm:pr-5"
                        }
                        error={errors?.description?.message}
                      />
                    )}
                  />
                </div>
                <div className="flex w-full flex-col gap-2">
                  <Text size="5xl" className="!font-bold !text-black-900_01">
                    Rating
                  </Text>
                  <StarReview form="add-review" />
                </div>
                <br />
                <Button
                  //   size="lg"
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

export default AddReviewForm;
