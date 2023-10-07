"use client";
import useAuth from "@/hooks/useAuth";
import React, { useState } from "react";
import Swal from "sweetalert2";

const ResetPasswordModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const { resetPassword } = useAuth();

  const handleResetPassword = () => {
    resetPassword(email)
      .then(() => {
        Swal.fire("A reset email has sent");
        router.push("/");
      })
      .catch(() => {
        Swal.fire("Email doesn't match");
      });
    onClose();
  };

  return (
    <div
      className={`fixed  inset-0 flex items-center justify-center z-50 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="modal-container w-96">
        <div className="modal-content bg-white p-6 rounded shadow-lg">
          <h2 className="text-2xl mb-4">Reset Password</h2>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="flex items-center justify-center gap-2">
            <button
              className="btn2 w-full justify-center"
              onClick={handleResetPassword}
            >
              Reset Password
            </button>
            <button
              className="btn w-full justify-center"
              onClick={() => onClose()}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordModal;
