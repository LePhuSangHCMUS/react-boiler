import HelmetTag from "@Common/HelmetTag/HelmetTag";
import meta from "@Metas/home";
import React from "react";

import {MainContent} from "./styled"
const Home = (props:any) => {
  return (
    <MainContent>
      <HelmetTag meta={meta} />
      Home
    </MainContent>
  );
};

export default Home;
