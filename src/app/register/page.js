"use client";
import Link from "next/link";
import React from "react";
import SocialLogin from "../components/authentication/SocialLogin";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const RegisterPage = () => {
  const router = useRouter();
  const { createUser } = useAuth();

  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then(() => {
        Swal.fire("Your account has created");
        router.push("/");
      })
      .catch(() => {
        Swal.fire("Password must be 6 character");
      });
  };
  return (
    <div className=" overflow-y-auto ">
      <div className="flex items-center justify-center  text-center">
        <div className="inline-block px-2 py-6 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl lg:w-2xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="pb-2 bg-white">
            <div className="flex-col items-center sm:flex">
              <div className="mt-3 mb-1 text-center sm:text-left">
                <h4
                  className=" text-3xl font-black leading-6 text-gray-700"
                  id="modal-headline"
                >
                  Sign Up
                </h4>
              </div>
            </div>
          </div>
          <SocialLogin></SocialLogin>
          <div className="w-full pt-2 text-sm text-center text-gray-600">
            or login with email address
          </div>
          <div className="px-4 text-xs bg-gray-50 sm:px-6 sm:flex-row-reverse">
            <form onSubmit={handleRegister} className="mt-4">
              <label for="email" className="block">
                <span className="font-sans text-sm text-gray-700">
                  Email Address
                </span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autocomplete="username"
                  className="block w-full px-3 py-2 mt-1 text-gray-700 border rounded-md form-input focus:border-indigo-600"
                  required
                />
              </label>
              <label for="password" className="block mt-3">
                <span className="font-sans text-sm text-gray-700">
                  Password
                </span>
                <input
                  type="password"
                  id="password"
                  name="password"
                  autocomplete="current-password"
                  className="block w-full px-3 py-2 mt-1 text-gray-700 border rounded-md form-input focus:border-indigo-600"
                  required
                />
              </label>

              <div className="mt-6">
                <button type="submit" className="btn w-full">
                  Sign up now
                </button>
              </div>
            </form>
          </div>
          <div className="justify-start w-full px-4 mt-2 font-sans text-xs leading-6 text-center text-gray-500">
            Already have an account?
            <Link
              className="block text-sm text-indigo-700  hover:underline"
              href="/login"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
