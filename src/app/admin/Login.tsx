"use client";

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useRouter } from "next/navigation";

import toast from "react-hot-toast";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleLogin = async (values: { email: string; password: string }) => {
    try {
      setIsLoading(true);

      // Login API request
      const res = await axios.post(`${baseUrl}/auth/login`, values);

      if (res.status === 200) {
        const { token } = res.data;

        // Save token to localStorage
        localStorage.setItem("authToken", token);

        toast.success("Login successful!");
        router.push("/admin/waitlist-details"); // Redirect to waitlist page
      } else {
        toast.error("Login failed. Please check your credentials.");
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
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-11/12 sm:w-[500px] max-w-screen-xl mx-auto border-t border-[#EAEAEA] pt-[40px] pb-[70px]">
      <h2 className="text-xl font-bold mb-4 text-center">
        Kindly login to Admin Account
      </h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => handleLogin(values)}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <div>
              <label htmlFor="email" className="block font-medium">
                Email Address
              </label>
              <Field
                type="email"
                name="email"
                className="border border-gray-300 p-2 rounded w-full"
                placeholder="Enter your email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <label htmlFor="password" className="block font-medium">
                Password
              </label>
              <Field
                type="password"
                name="password"
                className="border border-gray-300 p-2 rounded w-full"
                placeholder="Enter your password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                disabled={isSubmitting || isLoading}
              >
                {isLoading ? "Logging in..." : "Login"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
