import React from "react";
import Link from "next/link";
import { FaMedium, FaDev } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="https://www.cortexflow.org/" className="flex items-center">
              <span
                className="font-poppins font-medium self-center tracking-wide whitespace-nowrap dark:text-white
              lg:text-5xl
              md:text-5xl md:mr-10
              xs:text-5xl xs:mb-10 
              sxs:text-5xl sxs:mb-10"
              >
                CortexFlow
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 font-poppins">
            <div>
              <h2 className="mb-6 text-sm font-medium text-gray-900 uppercase dark:text-white">
                About us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link
                    href="https://docs.cortexflow.org/"
                    className="hover:underline hover:text-blue-700"
                  >
                    Documentation
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="https://github.com/CortexFlow/CortexBrain/tree/main/Examples"
                    className="hover:underline hover:text-blue-700"
                  >
                    Examples
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="https://docs.cortexflow.org/"
                    className="hover:underline hover:text-blue-700"
                  >
                    Use cases
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-medium text-gray-900 uppercase dark:text-white">
                Community
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link
                    href="https://github.com/CortexFlow/CortexBrain/issues"
                    className="hover:underline hover:text-blue-700 "
                  >
                    Issues
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="https://github.com/CortexFlow/CortexBrain/pulls"
                    className="hover:underline hover:text-blue-700"
                  >
                    Pull Requests
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="https://blog.cortexflow.org"
                    className="hover:underline hover:text-blue-700"
                  >
                    Blog
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="https://github.com/orgs/CortexFlow/discussions"
                    className="hover:underline hover:text-blue-700"
                  >
                    Discussions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-medium text-gray-900 uppercase dark:text-white">
                Info
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link
                    href="https://github.com/CortexFlow/CortexBrain/blob/main/LICENSE"
                    className="hover:underline hover:text-blue-700"
                  >
                    License
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="https://github.com/CortexFlow/CortexBrain/blob/main/CODE_OF_CONDUCT.md"
                    className="hover:underline hover:text-blue-700"
                  >
                    Code of Conduct
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="https://github.com/CortexFlow/CortexBrain/blob/main/SECURITY.md"
                    className="hover:underline hover:text-blue-700"
                  >
                    Security
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="https://github.com/CortexFlow/CortexBrain/blob/main/CONTRIBUTING.md"
                    className="hover:underline hover:text-blue-700"
                  >
                    Contributing Guidelines
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 font-poppins">
            © 2025{" "}
            <Link href="https://github.com/CortexFlow" className="hover:underline">
              CortexFlow
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0
                      sxs:justify-center sxs:mx-auto lg:mr-5 md:mr-5 ">
            <Link
              href="https://github.com/CortexFlow"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white lg:ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">GitHub Repository</span>
            </Link>
            <Link
              href="https://medium.com/@lorenzobradanini964"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <FaMedium />
              <span className="sr-only">Medium community</span>
            </Link>
            <Link
              href="https://dev.to/cortexflow"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <FaDev />
              <span className="sr-only">dev.to community</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
