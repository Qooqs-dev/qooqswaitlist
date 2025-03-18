"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import axios from "axios";
import { useState, useEffect } from "react";
import { WaitListData } from "../../../types/waitlist.types";
import WaitListModal from "@/components/modal/WaitListModal";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

export default function NotifyMeForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [referralCode, setReferralCode] = useState<string | null>(null);
  const [waitListData, setWaitListData] = useState<WaitListData | null>(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("referralCode");
    setReferralCode(code);
  }, []);

  const notifyUser = async (email: string) => {
    try {
      const res = await axios.post(`${baseUrl}/waitlist/join`, {
        email,
        referralCode,
      });

      if (res.status === 200) {

        setIsModalOpen(true);
        toast.success(res.data.response.message);
        setWaitListData(res.data.response.data);

        console.log(res.data.response.data);

      } else {
        toast.error("Failed to subscribe. Please try again.");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Handle Axios-specific errors
        console.log(error);
        console.log(error.response?.data?.response?.message);
        toast.error(
          error.response?.data?.response?.message || "An error occurred"
        );
      } else {
        // Handle non-Axios errors
        console.error("Unexpected error:", error);
        toast.error("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <div>
      <Formik
        initialValues={{ email: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          notifyUser(values.email);
          setSubmitting(false);
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form className="  w-full">
            <div className=" flex flex-col sm:flex-row gap-3 w-full md:w-10/12 ">
              <Field
                type="email"
                name="email"
                placeholder="Enter your email"
                className="font-light caret-white focus:outline-none focus:ring-0 focus:ring-none border border-white text-white bg-[#5386E4]  px-4 py-[11px] md:py-4 text-base rounded-full w-full placeholder-white"
              />

              <button
                type="submit"
                className="whitespace-nowrap bg-white text-[#5386E4] text-base px-[30px] md:px-[52px] py-[11px] md:py-4 rounded-full w-full sm:w-[196px]"
                disabled={isSubmitting}
              >
                Join Waitlist
              </button>
            </div>

            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-[12px] md:text-sm mt-1"
            />
          </Form>
        )}
      </Formik>

      {isModalOpen && waitListData && (
        <WaitListModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          waitListData={waitListData}
        />
      )}
    </div>
  );
}
