import HelmetTag from "@Common/HelmetTag/HelmetTag";
import {P} from "@Common/TagAntdNotSupport/TagAntdNotSupport"
import meta from "@Metas/home";
import React from "react";
const Home = (props:any) => {
  return (
    <>
      <HelmetTag meta={meta} />
      Home
      <P>Titke</P>
    </>
  );
};

export default Home;
