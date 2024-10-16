import React from "react";
import "../../css/searchbar.css"

const searchBar = () => {
  return (
    <div className="search-bar-blog">
      <input type="text" placeholder="Search" className="search-bar" />
      <i className="bi bi-search search-icon"></i> {/* Icona della lente di ingrandimento */}
    </div>
  );
};

export default searchBar;
