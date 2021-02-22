import React, { useState, useEffect } from "react";
import HelmetTag from "@Common/HelmetTag/HelmetTag";
import meta from "../../meta/home";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "ckeditor5/packages/ckeditor5-build-classic";

const Home = (props) => {
  return (
    <>
      <HelmetTag meta={meta} />
      Home
    </>
  );
};

export default Home;
