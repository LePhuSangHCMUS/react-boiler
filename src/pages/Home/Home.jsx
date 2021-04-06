import React, { useState, useEffect } from "react";
import HelmetTag from "@Common/HelmetTag/HelmetTag";
import meta from "../../meta/home";
import BraftEditor from "@Components/common/BraftEditor/BraftEditor"
const Home = (props) => {
  return (
    <>
      <HelmetTag meta={meta} />
      Home
      <BraftEditor/>
    </>
  );
};

export default Home;
