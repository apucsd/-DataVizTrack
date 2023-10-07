"use client";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import React from "react";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const router = useRouter();
  const { googleLogin } = useAuth();
  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        Swal.fire("Your login has been successful");
        router.push("/");
      })
      .catch((error) => {
        Swal.fire(error.message.split(":")[1]);
      });
  };
  return (
    <div>
      <div className="w-full font-sans text-sm text-center text-gray-600">
        Sign in on the internal platform
      </div>

      <div className="px-4 py-2  pt-3 mt-1 text-xs bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
        <button onClick={handleGoogleLogin} className="btn w-full">
          Login with google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
