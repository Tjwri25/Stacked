import React from "react";
import ArticleForm from "../components/ArticleForm";
import NavLinks from "../components/Nav";
import Footer from "../components/Footer";
import "../components/ArticleForm/index.css"

function ArticleFormPage() {
  return (
    <div className="articleFormPage">
      <NavLinks />
      <ArticleForm />
      <Footer />
    </div>
  );
}

export default ArticleFormPage;
