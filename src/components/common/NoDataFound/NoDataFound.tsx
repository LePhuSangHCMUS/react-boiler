//Lib
import React from 'react';
//Component
import { Div ,Img} from "@Common/TagAntdNotSupport/TagAntdNotSupport"
//Styled Component
import "./style.scss"
//Img
import noDataFound from "@Assets/images/Common/no-data-found.png"
//Const

const NoDataFound = () => {
  return (
    <Div className="sa_no-data" >
      <Img src={noDataFound} alt="Img"/>
    </Div>
  );
};

export default NoDataFound;