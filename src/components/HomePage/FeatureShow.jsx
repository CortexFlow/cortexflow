import React from "react";

const FeatureShow = () => {
  return (
    <div
      className="overflow-hidden bg-white mt-20"
      data-aos="fade-left"
      data-aos-delay="200"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="section-title mx-auto lg:hidden md:flex sm:flex xs:flex ">
            <h2 className="text-lg sm:text-xl font-semibold ">Features</h2>
          </div>
          <div className="lg:pr-8 lg:pt-2">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-600">
                Enhanced Monitoring
              </h2>
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Kernel Level Insights
              </p>
              <p className="mt-6 text-lg/8 text-gray-700">
                CortexBrain, the core CortexFlow component, leverage the power
                of eBPF programs to easily monitor your cluster without
                additional overhead
              </p>
              <ul className="mt-10 space-y-8 text-base/7 text-gray-600">
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 mt-1 text-blue-800 flex-shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.2"
                      d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z"
                    />
                  </svg>
                  <div>
                    <strong className="font-semibold text-gray-900">
                      Effortless Monitoring:
                    </strong>{" "}
                    Metrics, logs, and tracing will be natively integrated into
                    the platform. In just a few clicks, you'll get full
                    visibility into traffic, errors, and performance across all
                    services, no extra setup or service reconfiguration needed
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 mt-1 text-blue-800 flex-shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.2"
                      d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-3 5h3m-6 0h.01M12 16h3m-6 0h.01M10 3v4h4V3h-4Z"
                    />
                  </svg>
                  <div>
                    <strong className="font-semibold text-gray-900">
                      Integrated Dashboard:
                    </strong>{" "}
                    Monitor your cluster with the help of a modern looking
                    dashboard, designed to let users interact with the cluster
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 mt-1 text-blue-800 flex-shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <strong className="font-semibold text-gray-900">
                      Enhanced Network Security:
                    </strong>{" "}
                    Secure your cloud-edge cluster with a fast and secure
                    network packet dropper. CortexBrain makes network security
                    easy thanks to his underlying network tracker and packet
                    analyzer
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <img
            src="https://www.cortexflow.org/app.png"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 
            sm:hidden md:-ml-4 lg:-ml-0
            md:hidden lg:flex xs:hidden"
            width="2432"
            height="1442"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureShow;
