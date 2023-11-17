import React, { useState } from "react";
import "./modal.css";

import BeatLoader from "react-spinners/BeatLoader";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Modal = ({ closeModal }) => {
  const [isLoading, setIsLoading] = useState(false);

  const schema = yup.object({
    fullName: yup.string().required("Please enter your full name."),
    email: yup.string().email("Invalid email").required("Email is required."),
    phoneNumber: yup
      .string()
      .matches(/^\d+$/, "Invalid phone number.")
      .required("Phone number is required."),
    message: yup.string().required("Please enter your message."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const customSubmission = async (values) => {
    const formattedData = {
      firstName: values.fullName.split(" ")[0],
      lastName: values.fullName.split(" ")[1],
      phoneNumber: values.phoneNumber,
      message: values.message,
      email: values.email,
    };

    try {
      setIsLoading(true);
      const response = await axios.post(`/api/customer`, formattedData);

      const data = response.data;
      console.log(data);
      if (data.status === 200) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      setIsLoading(false);

      toast.error("Someething went wrong. Try again.");
    } finally {
      setIsLoading(false);
      setValue("email", "");
      setValue("fullName", "");
      setValue("message", "");
      setValue("phoneNumber", "");
    }
  };

  const onSubmit = async (values) => {
    await customSubmission(values);
  };

  return (
    <form
      className="modalBackground font-raleway"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="modalContainer z-[99999]">
        <div className="max-w-screen-xl px-8 grid gap-2 grid-cols-1 md:grid-cols-2 py-10 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
          <div className="flex flex-col justify-center items-center px-10">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Lets talk about everything!
              </h2>
              <div className="text-gray-700 mt-8  pb-5">
                Hate forms? Send us an <span className="underline">email</span>{" "}
                instead.
              </div>
              <div className="h-[400px] w-full rounded-xl box"></div>
            </div>
            <div className="mt-8 text-center"></div>
          </div>
          <div className="">
            <div className="w-full flex justify-end items-end">
              <button
                className="py-1 px-3 font-bold border-2 border-gray-500"
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  closeModal(false);
                }}
              >
                <i class="ri-close-fill"></i>
              </button>
            </div>
            <div>
              <span className="uppercase text-sm text-gray-600 font-bold">
                Full Name
              </span>
              <input
                className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder=""
                {...register("fullName")}
              />
              <p className="text-red-500 text-sm">{errors.fullName?.message}</p>
            </div>

            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Email
              </span>
              <input
                className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                {...register("email")}
              />
              <p className="text-red-500 text-sm">{errors.email?.message}</p>
            </div>

            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">
                phone nummber
              </span>
              <input
                className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="tel"
                {...register("phoneNumber")}
              />
              <p className="text-red-500 text-sm">
                {errors.phoneNumber?.message}
              </p>
            </div>

            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Message
              </span>
              <textarea
                className="w-full h-24 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                {...register("message")}
              ></textarea>
              <p className="text-red-500 text-sm">
                {errors.firstName?.message}
              </p>
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="uppercase text-sm font-bold tracking-wide bg-[#A18830] text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
              >
                {isLoading ? (
                  <BeatLoader color="#e8d5a1b8" />
                ) : (
                  <>Send Message</>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Modal;
