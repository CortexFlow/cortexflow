import React from "react";
import { Helmet } from "react-helmet";

const metadata_helmet = () => {
  return (
    <Helmet>
      <title>
        CortexFlow - Open-source Container Networking Infrastructure and
        Monitoring Platform
      </title>
      <meta
        name="description"
        content="A cutting-edge IoT simulation framework and big data analysis tool"
      />
      <meta
        name="keywords"
        content="edge devices,edge computing,cloud native,container networking,
          open source,maximum performance,big data,big data analytics,container monitoring platform,
          container monitoring,metrics export,container metrics,networking metrics,eBPF,linux kernel,bpf programs,
          programmable bpf programs,container observability,rust language,low overhead"
      />
      <meta name="author" content="CortexFlow" />
      <link rel="canonical" href="https://www.cortexflow.org/" />
    </Helmet>
  );
};

export default metadata_helmet;
