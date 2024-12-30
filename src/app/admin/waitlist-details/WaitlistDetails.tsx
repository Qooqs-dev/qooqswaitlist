"use client";

import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

interface WaitlistEntry {
  _id: string;
  email: string;
  referralCode: string;
  createdAt: string;
  referralsCount: number;
}

const WaitlistDetails = () => {
  const [waitlistData, setWaitlistData] = useState<WaitlistEntry[]>([]);
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [searchParams, setSearchParams] = useState({
    email: "",
    startDate: "",
    endDate: "",
    minReferrals: "",
    maxReferrals: "",
  });
  const router = useRouter();

  const fetchWaitlistData = useCallback(
    async (token: string) => {
      try {
        const res = await axios.get(
          `${baseUrl}/admin/waitlist/get-all-waitlist`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setWaitlistData(res.data.response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(error);
          console.log(error.response?.data?.response?.message);
          toast.error(
            error.response?.data?.response?.message || "An error occurred"
          );
        } else {
          console.error("Unexpected error:", error);
          toast.error("An unexpected error occurred. Please try again.");
        }

        localStorage.removeItem("authToken");
        router.push("/admin"); // Redirect to login page
      }
    },
    [router]
  );

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      toast.error("You must be logged in to access this page.");
      router.push("/admin"); // Redirect to login page
    } else {
      setAuthToken(token);
      fetchWaitlistData(token);
    }
  }, [fetchWaitlistData, router]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setAuthToken(null);
    setWaitlistData([]);
    toast.success("Logged out successfully!");
    router.push("/admin"); // Redirect to login page
  };

  const handleSearch = async () => {
    try {
      const params: Record<string, string> = {};
      Object.keys(searchParams).forEach((key) => {
        if (searchParams[key as keyof typeof searchParams]) {
          params[key] = searchParams[key as keyof typeof searchParams];
        }
      });

      const res = await axios.get(`${baseUrl}/admin/waitlist/search`, {
        headers: { Authorization: `Bearer ${authToken}` },
        params,
      });

      setWaitlistData(res.data.response.data);
      toast.success("Search completed successfully!");
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

  const handleExport = async () => {
    try {
      const res = await axios.get(`${baseUrl}/admin/waitlist/export`, {
        headers: { Authorization: `Bearer ${authToken}` },
        responseType: "blob", // Ensures the response is treated as a file
      });

      // Create a downloadable link
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "waitlist_export.csv");
      document.body.appendChild(link);
      link.click();
      link.remove();

      toast.success("Export successful!");
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
    <div className="w-11/12 max-w-screen-xl mx-auto border-t border-[#EAEAEA] pt-[40px] pb-[70px]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Waitlist Data</h2>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
        >
          Logout
        </button>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
        className="flex flex-col sm:flex-row gap-4 mb-4 items-start sm:items-end w-full sm:w-fit"
      >
        <div className="w-full sm:w-fit">
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            id="email"
            type="text"
            placeholder="Email"
            className="border p-2 rounded w-full"
            value={searchParams.email}
            onChange={(e) =>
              setSearchParams({ ...searchParams, email: e.target.value })
            }
          />
        </div>
        <div className="w-full sm:w-fit">
          <label htmlFor="startDate" className="block text-sm font-medium mb-1">
            Start Date
          </label>
          <input
            id="startDate"
            type="date"
            className="border p-2 rounded w-full"
            value={searchParams.startDate}
            onChange={(e) =>
              setSearchParams({ ...searchParams, startDate: e.target.value })
            }
          />
        </div>
        <div className="w-full sm:w-fit">
          <label htmlFor="endDate" className="block text-sm font-medium mb-1">
            End Date
          </label>
          <input
            id="endDate"
            type="date"
            className="border p-2 rounded w-full"
            value={searchParams.endDate}
            onChange={(e) =>
              setSearchParams({ ...searchParams, endDate: e.target.value })
            }
          />
        </div>
        <div className="w-full sm:w-fit">
          <label
            htmlFor="minReferrals"
            className="block text-sm font-medium mb-1"
          >
            Min Referrals
          </label>
          <input
            id="minReferrals"
            type="number"
            placeholder="Min Referrals"
            className="border p-2 rounded w-full"
            value={searchParams.minReferrals}
            onChange={(e) =>
              setSearchParams({ ...searchParams, minReferrals: e.target.value })
            }
          />
        </div>
        <div className="w-full sm:w-fit">
          <label
            htmlFor="maxReferrals"
            className="block text-sm font-medium mb-1"
          >
            Max Referrals
          </label>
          <input
            id="maxReferrals"
            type="number"
            placeholder="Max Referrals"
            className="border p-2 rounded w-full"
            value={searchParams.maxReferrals}
            onChange={(e) =>
              setSearchParams({ ...searchParams, maxReferrals: e.target.value })
            }
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-6 sm:mt-0 h-fit w-full sm:w-fit"
        >
          Search
        </button>
        <button
          onClick={handleExport}
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded mt-0 h-fit w-full sm:w-fit"
        >
          Export
        </button>
      </form>
      <div className="overflow-x-auto mt-8 pb-3 md:pb-0 sm:mt-0">
        <table className=" table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2 font-extrabold">
                S/N
              </th>
              <th className="border border-gray-300 px-4 py-2 font-extrabold">
                ID
              </th>
              <th className="border border-gray-300 px-4 py-2 font-extrabold">
                Email
              </th>
              <th className="border border-gray-300 px-4 py-2 font-extrabold">
                Referral Code
              </th>
              <th className="border border-gray-300 px-4 py-2 font-extrabold">
                Created At
              </th>
              <th className="border border-gray-300 px-4 py-2 font-extrabold">
                Referrals
              </th>
            </tr>
          </thead>
          <tbody>
            {waitlistData.map((entry, index) => (
              <tr key={entry._id}>
                <td className="border border-gray-300 px-4 py-2">
                  {index + 1}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {entry._id}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {entry.email}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {entry.referralCode}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {new Date(entry.createdAt).toLocaleDateString()}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {entry.referralsCount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WaitlistDetails;
