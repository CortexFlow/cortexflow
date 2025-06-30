import React from "react";
import { Link } from "react-router-dom";

const HandsOn = () => {
  return (
    <>
      <div class="mx-auto max-w-7xl lg:text-center md:text-center">
        <div class="container section-title" data-aos="fade-up">
          <h2 className="text-xl">Hands On</h2>
        </div>
        <div data-aos="fade-up">
          <p class="w-full mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
            Hands On with CortexFlow
          </p>
          <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl">
            <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {/*Prima scelta*/}
              <div class="relative w-[500px] h-[300px] p-6 mb-10 mx-auto rounded-lg shadow-gray-200 shadow-xl border-1 border-solid">
                <dt class="font-semibold text-gray-900 text-2xl">
                  Documentation
                </dt>
                {/*<div class="absolute size-10 items-center rounded-lg bg-yellow-400"></div>*/}
                <dd class="mt-10 text-base/7 text-gray-600">
                  Morbi viverra dui mi arcu sed. Tellus semper adipiscing
                  suspendisse semper morbi. Odio urna massa nunc massa.
                </dd>
                <div
                  className="flex justify-center space-x-8
                "
                >
                  <Link
                    to="https://docs.cortexflow.org"
                    className="mt-10 font-poppins hidden md:inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow transition duration-300"
                  >
                    Read
                  </Link>
                  <Link
                    to="https://crates.io/crates/cortexflow-cli"
                    className="mt-10 font-poppins hidden md:inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow transition duration-300"
                  >
                    crates.io
                  </Link>
                </div>
              </div>

              {/*Seconda scelta*/}
              <div class="relative p-6 w-[500px] h-[300px] mb-10 mx-auto rounded-lg shadow-gray-200 shadow-xl border-1 border-solid">
                <dl class="font-semibold text-gray-900 text-2xl">
                  Installation
                </dl>
                {/*<div class="absolute size-10 items-center rounded-lg bg-yellow-400"></div>*/}
                <dd class="mt-10 text-base/7 text-gray-600">
                  Morbi viverra dui mi arcu sed. Tellus semper adipiscing
                  suspendisse semper morbi. Odio urna massa nunc massa.
                </dd>
                <Link
                  to="https://docs.cortexflow.org"
                  className="mt-10 font-poppins hidden md:inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow transition duration-300"
                >
                  Install CortexBrain
                </Link>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default HandsOn;
