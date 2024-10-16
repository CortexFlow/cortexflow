import React from "react";
import Blogpg from "../Blog/components/blog_page";
import BlogHero from "../Blog/components/blog_hero";
import SearchBar from "../Blog/components/searchBar"
import Footer from "../Footer/footer";


const HomePage = () => {
  return (
    <div>
      <BlogHero />
      <SearchBar/>
      <Blogpg />
      <Footer />
    </div>
  );
};

export default HomePage;
