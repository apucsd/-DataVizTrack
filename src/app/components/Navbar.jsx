"use client";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { SlMenu, SlArrowRight } from "react-icons/sl";
import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import Swal from "sweetalert2";

const Navbar = () => {
  let [open, setOpen] = useState(false);
  const { user, logOut } = useAuth();
  let Links = [
    { name: "HOME", link: "/" },
    { name: "DESIGN", link: "/design" },
    { name: "ABOUT", link: "/about" },
    { name: "CONTACT", link: "/contact" },
  ];
  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be log out now!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Log out!",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut()
          .then(() => {
            Swal.fire("Your logout has been succeeded");
            // console.log(result.user);
          })
          .catch(() => {
            Swal.fire("Something Wrong when getting logout");
          });
      }
    });
  };

  return (
    <div className="shadow-md w-full  top-0 left-0">
      <div className="md:flex items-center justify-between  py-4 md:px-10 px-7">
        {/* logo section */}
        <div className=" text-2xl cursor-pointer flex items-center gap-1">
          <span className="w-7 h-7 text-blue-600" />
          <span>DataVizTrack</span>
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? (
            <SlArrowRight className="duration-300 text-lg" />
          ) : (
            <SlMenu className="duration-300 text-lg" />
          )}
        </div>

        <ul
          className={`md:flex bg-white  md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-14" : "top-[-490px]"
          }`}
        >
          {Links.map((link, index) => (
            <li key={index} className="md:ml-8 md:my-0 my-7">
              <span className="text-gray-800 hover:text-blue-400 duration-500">
                <NavLink href={link.link}>{link.name}</NavLink>
              </span>
            </li>
          ))}
        </ul>
        {user ? (
          <>
            <button onClick={handleLogOut} className="btn2 ms-4">
              LOGOUT
            </button>
          </>
        ) : (
          <div>
            <button className="btn ms-8 mt-4  hidden">
              <Link href={`/login`}>LOGIN</Link>
            </button>
          </div>
        )}
        {/* button */}
      </div>
    </div>
  );
};

export default Navbar;
