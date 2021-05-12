//Lib
import React from 'react';
//Component
import {Image} from "antd"
//Styled Component
import {NoDataFoundWrapper} from "./styled"
//Img
import noDataFound from "@Assets/images/Common/no-data-found.png"
//Const

const NoDataFound = () => {
  return (
    <NoDataFoundWrapper>
      <Image src={noDataFound} alt="Img" preview={false}/>
    </NoDataFoundWrapper>
  );
};

export default NoDataFound;