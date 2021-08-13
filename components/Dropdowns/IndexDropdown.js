import React from "react";
import Link from "next/link";
import { createPopper } from "@popperjs/core";

const IndexDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <div
        className="hover:text-blueGray-500 items-center flex cursor-pointer"
        href="#asyraf"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="p-10">
          <p className="text-blueGray-700 text-s text-left uppercase font-bold">
            Hi, Asyraf
          </p>
          <p className="text-blueGray-500 text-xs text-left font-light">
            Product Development 
          </p>
        </div>
      </div>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
          }
        >
          Account
        </span>
        <Link href="/admin/dashboard">
          <a
            href="#profile"
            className={
              "text-sm ml-3 py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            Profile
          </a>
        </Link>
        <Link href="/admin/dashboard">
          <a
            href="#team"
            className={
              "text-sm ml-3 py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            Team Member
          </a>
        </Link>
        <Link href="/admin/dashboard">
          <a
            href="#alogs"
            className={
              "text-sm ml-3 py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            Activity Logs
          </a>
        </Link>
        <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
          }
        >
          System
        </span>
        <Link href="/admin/dashboard">
          <a
            href="#logout"
            className={
              "text-sm ml-3 py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            Log Out
          </a>
        </Link>
      </div>
    </>
  );
};

export default IndexDropdown;
