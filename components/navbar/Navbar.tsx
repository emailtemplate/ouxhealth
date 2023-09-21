"use client";

import Link from "next/link";
import { LuAlignJustify } from "react-icons/lu";
import { AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [closeAnimation, setCloseAnimation] = useState(false);

  return (
    <div
      className={`w-[100vw] fixed z-50   ${
        openNav ? "bg-[#FCCF8D] text-[#2c4f30]" : "bg-[#2c4f30] text-[#e6eceb]"
      } `}
    >
      <div className="py-5 px-5 flex justify-between xl:justify-between xl:px-10">
        <div className="xl:w-[30%] tracking-tight fuggles text-lg lg:text-2xl">
          <Link href="/">OuXHcare</Link>
          <br />
        </div>
        <div>
          {!openNav && (
            <div
              onClick={() => {
                setOpenNav(!openNav);
              }}
              className="cursor-pointer "
            >
              <LuAlignJustify className="text-2xl font-extrabold lg:text-3xl" />
            </div>
          )}
          {openNav && (
            <div
              onClick={() => {
                setCloseAnimation(!closeAnimation);
                setOpenNav(!openNav);
              }}
              className="cursor-pointer"
            >
              <AiOutlineMinus className="text-3xl mt-[-3px] font-extrabold lg:text-3xl" />
            </div>
          )}
        </div>
        <div
          className={`${
            openNav
              ? "block animate__animated animate__fadeInRight h-full bg-[#FCCF8D] w-full right-0 left-0 px-5 xl:px-0 fixed mt-10 "
              : "hidden"
          }   `}
        >
          <ul className="flex flex-col h-full justify-center text-3xl gap-10 items-end xl:font-[400] xl:mx-5 xl:text-5xl">
            <li>
              <Link
                onClick={() => {
                  {
                    openNav && setOpenNav(!openNav);
                  }
                }}
                href="/"
              >
                Home
              </Link>{" "}
            </li>
            <li>
              <Link
                onClick={() => {
                  {
                    openNav && setOpenNav(!openNav);
                  }
                }}
                href="/about"
              >
                About
              </Link>{" "}
            </li>
            <li>
              <Link
                onClick={() => {
                  {
                    openNav && setOpenNav(!openNav);
                  }
                }}
                href="/search"
              >
                Search
              </Link>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
