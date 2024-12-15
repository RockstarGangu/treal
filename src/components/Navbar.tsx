"use client";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Features", href: "#features" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Pricing", href: "#pricing" },
];

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useScroll } from "motion/react";
import { AlignJustify, Dumbbell, SquareX } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [show, setShow] = useState(true);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest > lastScrollY) {
        // Scrolling down
        setShow(false);
      } else {
        // Scrolling up
        setShow(true);
      }
      setLastScrollY(latest);
    });
  }, [lastScrollY, scrollY]);

  return (
    // creating a floating, transparent and fully rounded navbar which is fixed at the top of the page
    // and making it hidden when scrolled down

    <motion.div
      initial={{ y: 0 }}
      animate={{ y: show ? 0 : -60 }}
      transition={{ ease: "easeInOut", duration: 0.3 }}
    >
      <div className="fixed top-0 left-0 right-0 z-50 sm:w-[65%] mx-auto flex items-center justify-between bg-white bg-opacity-90 px-5 h-16 mt-5 border-2 shadow-md rounded-full">
        <div className="flex items-center gap-2">
          <Dumbbell className="sm:h-8 sm:w-8 h-6 w-6" />
          <span className="sm:text-3xl text-xl font-bold text-green-600">
            Treal
          </span>
        </div>
        <div className="sm:flex hidden items-center gap-10">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-xl text-black hover:scale-110 transition-all duration-150 "
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div>
          <button className="sm:flex hidden items-center gap-2 bg-green-500 hover:bg-green-800 text-white rounded-full px-8 sm:px-10 py-2 font-semibold">
            Get Started
          </button>
          <div className="relative" onClick={() => setOpen(!open)}>
            <AlignJustify className="sm:hidden" />
          </div>
          {/* Mobile nav items list */}
          <div
            className={`${
              open && "hidden"
            } absolute top-0 right-1 z-50 flex flex-col gap-5 p-5 bg-white shadow-lg rounded-xl`}
          >
            <div
              className="flex flex-row-reverse"
              onClick={() => setOpen(!open)}
            >
              <SquareX className="w-8 h-8" />
            </div>
            <hr />
            {navItems.map((item, index) => (
              <Link key={index} href={item.href} className="text-xl text-black">
                {item.name}
              </Link>
            ))}
            <hr />
            <button className="bg-green-400 px-4 py-2 rounded-full">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
