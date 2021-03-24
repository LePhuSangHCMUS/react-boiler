import React, { useState, useEffect } from "react";
import HelmetTag from "@Common/HelmetTag/HelmetTag";
import meta from "../../meta/home";
const Home = (props) => {
  return (
    <>
      <HelmetTag meta={meta} />
      Home
    </>
  );
};

export default Home;
