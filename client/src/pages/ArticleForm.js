import React from "react";
import ArticleForm from "../components/ArticleForm";
import NavLinks from "../components/Nav";
import OtherOtherFooter from "../components/OtherOtherFooter";
import BackgroundVid from "../components/Background"
import "../components/ArticleForm/index.css"


function ArticleFormPage() {
  return (
    <div className="articleFormPage">
      <BackgroundVid />
      <NavLinks />
      <ArticleForm />
      <OtherOtherFooter />
    </div>
  );
}

export default ArticleFormPage;
