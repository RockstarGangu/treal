import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandReddit,
} from "@tabler/icons-react";
import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center justify-center gap-5 py-5 bg-[#111827]">
        <div className="flex w-full sm:flex-row flex-col items-center justify-evenly">
          <div className="flex flex-col items-center justify-center  gap-4">
            <h1 className="text-white text-3xl font-bold">Treal</h1>
            <p className="text-white text-center text-sm">
              Your personal nutrition companion
              <br />
              Track your calories, macros, and
              <br className="sm:hidden block" />
              water intake effortlessly
            </p>
            <div className="flex flex-row items-center gap-3">
              <IconBrandInstagram size={30} color="white" />
              <IconBrandFacebook size={30} color="white" />
              <IconBrandReddit size={30} color="white" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <div>
              <h1 className="text-white text-xl font-semibold">Quick Links</h1>
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <p className="text-gray-400 hover:text-green-400">Features</p>
              <p className="text-gray-400 hover:text-green-400">Testimonials</p>
              <p className="text-gray-400 hover:text-green-400">Pricing</p>
              <p className="text-gray-400 hover:text-green-400">FAQs</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <div>
              <h1 className="text-white text-xl font-semibold">Company</h1>
            </div>
            <div className="flex flex-col items-center  justify-center gap-1">
              <p className="text-gray-400 hover:text-green-400">About</p>
              <p className="text-gray-400 hover:text-green-400">Careers</p>
              <p className="text-gray-400 hover:text-green-400">Privacy</p>
              <p className="text-gray-400 hover:text-green-400">Terms</p>
            </div>
          </div>
        </div>
        <hr className="border-gray-400 w-[80%]" />
        <div className="flex items-center justify-center">
          <p className="text-white text-md">
            © 2023 Treal. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
