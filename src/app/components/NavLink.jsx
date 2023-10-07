import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <span
      className={isActive ? "bg-blue-500 px-4 py-3 text-white rounded-sm" : ""}
    >
      <Link href={href}>{children}</Link>
    </span>
  );
};
export default NavLink;
