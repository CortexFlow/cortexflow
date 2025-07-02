import React from "react";

const TechFeatures = () => {
  return (
    <div
      className="overflow-hidden bg-white py-20 xs:py-20 sxs:py-20"
      data-aos="fade-right"
      data-aos-delay="200"
    >
      <div className="mx-auto max-w-7xl lg:px-8 xs:px-12 sxs:px-12">
        {/*
        mx-auto grid max-w-2xl grid-cols-1 gap-x-8
         sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2*/}
        <div
          className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 
         sm:gap-y-20 lg:max-w-none lg:grid-cols-2"
        >
          <div className="flex justify-center">
            <img
              src="https://www.cortexflow.org/example.gif"
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 
              sm:hidden md:-ml-4 lg:-ml-[300px]
              md:hidden lg:flex xs:hidden sxs:hidden"
              width="2432"
              height="1442"
            />
          </div>

          {/* Testo a destra */}
          <div className="lg:pl-8 lg:pt-2">
            <div className="lg:max-w-2xl">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                CLI Features
              </h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Smarter CLI, Smoother Workflows
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our CLI streamlines service mesh management with intuitive
                commands, simplified deployment, and seamless upgrades with
                minimum overhead
              </p>

              <ul className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {/* Feature 1 */}
                <li className="flex items-start gap-3">
                  <svg
                    className="w-[20px] h-[20px] mt-1 text-blue-800 flex-shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 8a1 1 0 0 0-1 1v10H9a1 1 0 1 0 0 2h11a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-8Zm4 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M5 3a2 2 0 0 0-2 2v6h6V9a3 3 0 0 1 3-3h8c.35 0 .687.06 1 .17V5a2 2 0 0 0-2-2H5Zm4 10H3v2a2 2 0 0 0 2 2h4v-4Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <strong className="font-semibold text-gray-900">
                      Easy to Install:
                    </strong>{" "}
                    Deploying our service mesh takes just a few steps and
                    integrates seamlessly with existing Kubernetes environments.
                    Core components are deployed automatically using optimized
                    defaults, so you don’t have to worry about manual
                    configuration
                  </div>
                </li>
                {/* Feature 2 */}
                <li className="flex items-start gap-3 text-gray-600">
                  <svg
                    className="w-[20px] h-[20px] mt-1 text-blue-800 flex-shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.2"
                      d="M12 6v13m0-13 4 4m-4-4-4 4"
                    />
                  </svg>
                  <div>
                    <strong className="font-semibold text-gray-900">
                      Components Upgrades:
                    </strong>{" "}
                    Upgrades are seamlessly managed and versioned, with
                    automatic rollback in case of failure. Each component can be
                    updated independently without disrupting running services
                  </div>
                </li>

                {/* Feature 3 */}
                <li className="flex items-start gap-3 text-gray-600">
                  <svg
                    className="w-[20px] h-[20px] mt-1 text-blue-800 flex-shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 2c-1.10457 0-2 .89543-2 2v4c0 .55228.44772 1 1 1s1-.44772 1-1V4h12v7h-2c-.5523 0-1 .4477-1 1v2h-1c-.5523 0-1 .4477-1 1s.4477 1 1 1h5c.5523 0 1-.4477 1-1V3.85714C20 2.98529 19.3667 2 18.268 2H6Z" />
                    <path d="M6 11.5C6 9.567 7.567 8 9.5 8S13 9.567 13 11.5 11.433 15 9.5 15 6 13.433 6 11.5ZM4 20c0-2.2091 1.79086-4 4-4h3c2.2091 0 4 1.7909 4 4 0 1.1046-.8954 2-2 2H6c-1.10457 0-2-.8954-2-2Z" />
                  </svg>
                  <div>
                    <strong className="font-semibold text-gray-900">
                      Easy to use:
                    </strong>{" "}
                    The CLI and dashboard are built for clarity and ease of use,
                    even for teams new to service meshes. Configurations are
                    clean, declarative, and include presets for common use
                    cases, no useless overhead
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechFeatures;
