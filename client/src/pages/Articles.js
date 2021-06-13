import React from "react";

import Footer from "../components/Footer";

import ArticleCard from "../components/ArticleCard";
import ArticleFormLink from "../components/ArticleFormLink";

function Articles() {


  return (
    <div className="articlesPage">

      <ArticleCard />
      <ArticleFormLink />
    <Footer />
      </div>
  );
}

export default Articles;
