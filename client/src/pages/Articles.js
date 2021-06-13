import React from "react";
import DevSpotlight from "../components/DevSpotlight";
import Footer from "../components/Footer";
import NavLinks from "../components/Nav"
// import ArticleCard from "../components/ArticleCard";
// import ArticleFormLink from "../components/ArticleFormLink";

function Articles() {


  return (
    <div className="articlesPage">
      <NavLinks />
      <DevSpotlight />
    <Footer />
      </div>
  );
}

export default Articles;
