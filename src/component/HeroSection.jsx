"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import bg from "../assets/hero.jpg";
import { Icon } from "@iconify/react";
import MyIcon from "./MyIcon";
import Footer from "./Footer";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="">
        <div className="relative isolate px-6 pt-14 lg:px-8 bg1 bg-fixed">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center text-white text-2xl">
              Elevate Your Game
            </div>
            <div className="text-center">
              <h1 className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">
                Activewear Redefined
              </h1>
              <p className="mt-8 text-pretty text-lg font-medium text-white sm:text-xl/8">
                Shop the latest in high-quality sportswear today!
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-full bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Shop Now
                </a>
                <a
                  href="#"
                  className=" rounded-full text-sm/6 font-semibold text-white border-2 p-2"
                >
                  Explore <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/*Start section 2*/}

        <SectionTwo></SectionTwo>

        {/* Start Section 3 */}

        <SectionThree></SectionThree>

        {/* Start Section 4 */}

        <SectionFour></SectionFour>

      </div>
      {/* footer */}
      <Footer></Footer>
    </>
  );
}
