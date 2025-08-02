"use client";

import { GoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import axios from "axios";

// A simple spinner component for loading state
const Spinner = () => (
  <div className="border-4 border-t-4 border-gray-200 border-t-blue-600 rounded-full w-8 h-8 animate-spin"></div>
);

export default function Signup() {
  const router = useRouter(); // Initialize router
  const TENANT_ID = "6873948b091b5b6f35eb092f"; // Use const for fixed values

  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    if (!phoneNumber.trim()) {
      setError("Phone number is required.");
      return;
    }
    // Simple validation for phone number (e.g., must be 10 digits)
    if (!/^\d{10}$/.test(phoneNumber)) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

    setFormSubmitted(true);
  };

  const handleGoogleSuccess = async (response) => {
    setIsLoading(true); // Start loading
    setError("");

    try {
      const res = await axios.post(
        "https://medical-deploy-784797008827.europe-west1.run.app/api/web-auth/google",
        {
          credential: response.credential,
          tenantId: TENANT_ID,
          address,
          phoneNumber,
        }
      );

      const { token, customer } = res.data;

      localStorage.setItem("token", token);
      localStorage.setItem("customer", JSON.stringify(customer));
      router.replace("/");
    } catch (err) {
      console.error("Login failed", err);
      setError("Login failed. Please try again.");
      setIsLoading(false);
      setFormSubmitted(false);
    }
  };

  const handleGoogleError = () => {
    setIsLoading(false);
    setError("Google login failed. Please try again.");
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center space-y-4">
            <Spinner />
            <p className="text-gray-600">Signing you up...</p>
          </div>
        ) : (
          <>
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900">Welcome</h1>
              <p className="mt-2 text-sm text-gray-600">
                {!formSubmitted
                  ? "Please provide your details to continue"
                  : "Complete your sign-in with Google"}
              </p>
            </div>

            {!formSubmitted ? (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label htmlFor="address" className="sr-only">
                    Address
                  </label>
                  <input
                    id="address"
                    type="text"
                    placeholder="Address (Optional)"
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Phone Number *"
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-600 text-center">{error}</p>
                )}

                <button
                  type="submit"
                  className="w-full px-4 py-3 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  Continue
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center pt-4">
                {error && (
                  <p className="text-sm text-red-600 mb-4 text-center">
                    {error}
                  </p>
                )}
                <GoogleLogin
                  onSuccess={handleGoogleSuccess}
                  onError={handleGoogleError}
                  useOneTap
                />
              </div>
            )}
          </>
        )}
        <div className="text-center text-sm mt-6">
          <p className="text-gray-600">
            Already have an account?{" "}
            <button
              onClick={() => router.push("/login")}
              className="font-semibold text-blue-600 hover:text-blue-800 transition-colors"
            >
              Sign In
            </button>
          </p>
        </div>
      </div>
    </main>
  );
}
