import Head from "next/head";

const metadata_helmet = () => {
  return (
    <Head>
      <title>
        CortexFlow - Open-source Container Networking Infrastructure and
        Monitoring Platform
      </title>

      <meta
        name="description"
        content="Your end-end-to end platform for creating and managing lightweight, intelligent and efficient service mesh architectures, to seamlessly connect cloud and edge devices"
      />
      <meta
        name="keywords"
        content="edge devices,edge computing,cloud native,container networking,open source,maximum performance,big data analytics,container monitoring platform,metrics export,networking metrics,eBPF,linux kernel,bpf programs,container observability,rust language,low overhead"
      />
      <meta name="author" content="CortexFlow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="google-site-verification"
        content="5r4cbGKX3aLjUKjPwR6nWr1rtUPOewvYh7lsf0x-iPc"
      />

      <link rel="canonical" href="https://www.cortexflow.org/" />
      <link rel="icon" href="https://www.cortexflow.org/favicon.svg" />
      <link
        rel="apple-touch-icon"
        href="https://www.cortexflow.org/logo512.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <link rel="stylesheet" href="./style.css" />

      {/*     <!-------------------------------------------------------------------->
    <!-- SEO Meta Tags --> */}

      {/*     <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content="https://www.cortexflow.org" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="CortexFlow - Open-source Container Networking Infrastructure and Monitoring Platform"
      />
      <meta
        property="og:description"
        content="Open-source Container Networking Infrastructure and Monitoring Platform built for seamless integration and maximum performance"
      />
      <meta
        property="og:image"
        content="https://www.cortexflow.org/logo512.png"
      />

      {/*     <!--------------------------------------------------------------------> */}

      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "CortexFlow",
            "description": "Open-source Container Networking Infrastructure and Monitoring Platform built for seamless integration and maximum performance",
            "operatingSystem": "Windows, macOS, Linux",
            "url": "https://www.cortexflow.org/",
            "logo": "https://www.cortexflow.org/favicon.svg",
            "author": {
              "@type": "Organization",
              "name": "CortexFlow"
            },
            "sameAs": [
              "https://github.com/CortexFlow",
              "https://medium.com/@lorenzobradanini964",
              "https://dev.to/cortexflow"
            ]
          }
        `}
      </script>
    </Head>
  );
};

export default metadata_helmet;
