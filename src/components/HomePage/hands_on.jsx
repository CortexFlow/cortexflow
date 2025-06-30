import React from "react";
import { Link } from "react-router-dom";

const HandsOn = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
      <div className="section-title" data-aos="fade-up">
        <h2 className="text-lg sm:text-xl font-semibold">Get Hands On</h2>
      </div>

      <div data-aos="fade-up">
        <p className="w-full mt-2 text-gray-900 font-semibold tracking-tight text-2xl sm:text-3xl md:text-[35px] lg:text-5xl">
          Get started with CortexFlow
        </p>

        <div className="mt-12 sm:mt-16 lg:mt-24 max-w-3xl lg:max-w-4xl mx-auto">
          <dl className="grid grid-cols-1 md:grid-cols-2">
            {/* Card 1 - Documentation */}
            <div
              className="relative p-6 mb-10 mx-auto rounded-lg shadow-xl border border-gray-200 bg-white
              md:w-[290px] md:h-[310px] lg:w-[400px] lg:h-[300px]"
            >
              <dt
                className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4
              md:text-[22px]"
              >
                Documentation
              </dt>
              <dd className="text-sm md:text-[15px] lg:text-base text-gray-600 mb-6 text-center">
                Discover how CortexBrain works. Deep dive into the core
                internals and learn how CortexBrain can be used to enhance your
                monitoring experience.
              </dd>
              <div className="flex flex-col sm:flex-row justify-center gap-4 md:mt-12">
                <Link
                  to="https://docs.cortexflow.org"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg font-medium shadow transition duration-300"
                >
                  Read
                </Link>
                <Link
                  to="https://crates.io/crates/cortexflow-cli"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg font-medium shadow transition duration-300"
                >
                  crates.io
                </Link>
              </div>
            </div>

            {/* Card 2 - Installation */}
            <div
              className="relative p-6 mb-10 mx-auto rounded-lg shadow-xl border border-gray-200 bg-white
              md:w-[290px] md:h-[310px] lg:w-[400px] lg:h-[300px]
              "
            >
              <dt
                className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4
              md:text-[22px]"
              >
                Installation
              </dt>
              <dd className="text-sm md:text-base text-gray-600 mb-6 text-center">
                Learn how to install and use the Command Line Interface (CLI) to
                install CortexBrain's core components.
              </dd>
              <div
                className="flex justify-center md:mt-12
              "
              >
                <Link
                  to="https://docs.cortexflow.org"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg font-medium shadow transition duration-300"
                >
                  Install CortexBrain
                </Link>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default HandsOn;
