//Lib
// import {Spin} from "antd"
//Component
import { Div } from "@Common/TagAntdNotSupport/TagAntdNotSupport";
import React from "react";
//Styled Component
import "./styles.scss";
//Img
//Const

const Spinner = (props:any) => {
  return (
    <Div className="rc-spinner">
				<div className="spinner-content"></div>
    </Div>
  );
};

export default Spinner;
