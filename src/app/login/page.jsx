"use client";

import { GoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const Spinner = () => (
  <div className="border-4 border-t-4 border-gray-200 border-t-blue-600 rounded-full w-8 h-8 animate-spin"></div>
);

export default function LoginPage() {
  const router = useRouter();
  const TENANT_ID = "6873948b091b5b6f35eb092f";

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGoogleSuccess = async (response) => {
    setIsLoading(true);
    setError("");
    const credential = response.credential;

    try {
      const res = await axios.post(
        "https://medical-deploy-784797008827.europe-west1.run.app/api/web-auth/google",
        {
          credential,
          tenantId: TENANT_ID,
        }
      );

      const { token, customer } = res.data;

      if (token) {
        localStorage.setItem("token", token);
        localStorage.setItem("customer", JSON.stringify(customer));
        router.replace("/");
      } else {
        sessionStorage.setItem("googleCredential", credential);
        router.push("/signup");
      }
    } catch (err) {
      if (
        err.response &&
        (err.response.status === 404 || err.response.status === 401)
      ) {
        console.log("New user detected. Redirecting to sign-up.");
        sessionStorage.setItem("googleCredential", credential);
        router.push("/signup");
      } else {
        console.error("Login failed", err);
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
