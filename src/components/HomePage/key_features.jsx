import React from "react";

const KeyFeatures = () => {
  return (
    <>
      <div data-aos="fade-up">
        <div class="bg-white lg:py-4 sm:py-32 md:py-2">
          <div class="mx-auto lg:max-w-7xl gap-x-8 gap-y-16 px-6 lg:px-8 md:max-w-3xl md:px-4">
            <div class="mx-auto lg:text-center md:text-center ">
              <div class="container section-title" data-aos="fade-up">
                <h2 className="text-xl">🐝 eBPF Powered Technology</h2>
              </div>
              <p
                class="w-full mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 
              sm:text-5xl lg:text-balance xs:text-4xl text-center "
              >
                Everything you need to monitor your cluster
              </p>
            </div>
            <div class=" p-3.5 mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-7xl">
              <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                <div class="relative pl-16">
                  <dt class="text-xl font-semibold text-gray-900">
                    <div class="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-yellow-400">
                      <svg
                        class="size-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
                        />
                      </svg>
                    </div>
                    Networking
                  </dt>
                  <dd class="mt-2 text-base/8  text-gray-600">
                    Monitor network events using the eBPF powered technology
                    without introducing significant overhead
                  </dd>
                </div>
                <div class="relative pl-16">
                  <dt class="text-xl font-semibold text-gray-900">
                    <div class="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                      <svg
                        class="size-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                        />
                      </svg>
                    </div>
                    Monitoring
                  </dt>
                  <dd class="mt-2 text-base/8 text-gray-600">
                    Collect monitoring data such as memory usage, CPU and I/O
                    bottlenecks without requiring application changes
                  </dd>
                </div>
                <div class="relative pl-16">
                  <dt class="text-xl font-semibold text-gray-900">
                    <div class="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-green-500">
                      <svg
                        class="size-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                        />
                      </svg>
                    </div>
                    Observability
                  </dt>
                  <dd class="mt-2 text-base/8 text-gray-600">
                    Observe events in your cluster to improve system
                    performance, reliability and system optimization with
                    in-context precise data and insight
                  </dd>
                </div>
                <div class="relative pl-16">
                  <dt class="text-xl font-semibold text-gray-900">
                    <div class="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-red-500">
                      <svg
                        class="size-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33"
                        />
                      </svg>
                    </div>
                    Advanced security
                  </dt>
                  <dd class="mt-2 text-base/8 text-gray-600">
                    Secure your environment with an advanced system protection.
                    CortexBrain is able to filter malicious network packets
                    thanks to his packet filter that operates at the lowest
                    level of the network stack
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KeyFeatures;
