import React from "react";
import ArticleForm2 from "../components/ArticleForm2";
import NavLinks2 from "../components/Nav2";
import OtherOtherFooter from "../components/OtherOtherFooter";
import BackgroundVid from "../components/Background"
import "../components/ArticleForm/index.css"


function ArticleFormPage() {
  return (
    <div className="articleFormPage">
      <BackgroundVid />
      <NavLinks2 />
      <ArticleForm2 />
      <OtherOtherFooter />
    </div>
  );
}

export default ArticleFormPage;