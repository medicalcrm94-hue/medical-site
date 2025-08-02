"use client";

import { GoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

// A simple spinner component for loading state
const Spinner = () => (
  <div className="border-4 border-t-4 border-gray-200 border-t-blue-600 rounded-full w-8 h-8 animate-spin"></div>
);

export default function LoginPage() {
  const router = useRouter();
  const TENANT_ID = "6857d7c73832f6468f9b7dff";

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGoogleSuccess = async (response) => {
    setIsLoading(true);
    setError("");
    const credential = response.credential;

    try {
      // First, try to log in without address and phone number
      const res = await axios.post(
        "http://localhost:8005/api/web-auth/google",
        {
          credential,
          tenantId: TENANT_ID,
        }
      );

      const { token, customer } = res.data;

      // If a token is returned, the user exists. Log them in.
      if (token) {
        localStorage.setItem("token", token);
        localStorage.setItem("customer", JSON.stringify(customer));
        router.replace("/");
      } else {
        // If no token, assume it's a new user.
        // Store credential and redirect to sign-up page.
        sessionStorage.setItem("googleCredential", credential);
        router.push("/signup");
      }
    } catch (err) {
      // This catch block will likely run for new users if your API returns a 404 or other error.
      // This is expected. We handle it by redirecting to the sign-up page.
      if (
        err.response &&
        (err.response.status === 404 || err.response.status === 401)
      ) {
        console.log("New user detected. Redirecting to sign-up.");
        sessionStorage.setItem("googleCredential", credential);
        router.push("/signup");
      } else {
        console.error("Login failed", err);
        // Get a specific error message from the API response, or fall back to a generic one.
        const errorMessage =
          err.response?.data?.message ||
          err.message ||
          "An unexpected error occurred. Please try again.";
        setError(errorMessage);
        setIsLoading(false);
      }
    }
  };

  const handleGoogleError = () => {
    setIsLoading(false);
    setError("Google login failed. Please try again.");
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-lg text-center">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center space-y-4">
            <Spinner />
            <p className="text-gray-600">Signing you in...</p>
          </div>
        ) : (
          <>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Sign In</h1>
              <p className="mt-2 text-sm text-gray-600">
                Welcome back! Please sign in with your Google account.
              </p>
            </div>

            {error && (
              <p className="text-sm text-red-600 text-center">{error}</p>
            )}

            <div className="flex flex-col items-center justify-center pt-4">
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={handleGoogleError}
              />
            </div>

            <div className="text-center text-sm mt-6">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <button
                  onClick={() => router.push("/signup")}
                  className="font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Sign Up
                </button>
              </p>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
