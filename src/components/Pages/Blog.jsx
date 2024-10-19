import React from "react";
import { Helmet } from "react-helmet";
import Blogpg from "../Blog/components/blog_page";
import BlogHero from "../Blog/components/blog_hero";
import SearchBar from "../Blog/components/searchBar";
import Footer from "../Footer/footer";

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>CortexFlow Blog - Stories on Innovation, Technology & IoT</title>
        <meta
          name="description"
          content="Stories on Innovation, Technology & IoT"
        />
        <meta
          name="keywords"
          content="CortexFlow,cortexflow,blog,IoT,Artifical Intelligence blog,Innovation blog,Stories on Innovation,Technology blog,
          big data blog,machine learning blog,technology blog for students,innovation blog for education,technology blog website,
          technology blog ideas,artificial intelligence blog writing,artificial intelligence blog post,artificial intelligence blog post"
        />
        <meta name="author" content="CortexFlow" />
        <link rel="canonical" href="https://www.cortexflow.org/" />
      </Helmet>
      <BlogHero />
      <SearchBar />
      <Blogpg />
      <Footer />
    </div>
  );
};

export default HomePage;
