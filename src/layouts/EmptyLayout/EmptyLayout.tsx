//Lib
import React from "react";
//Styled
import { EmptyLayoutWrapper } from "./styled";
interface IProps {
  children: React.ReactNode;
}

const DefaultLayout = (props: IProps) => {
  const { children } = props;
  return (
    <EmptyLayoutWrapper>
        {children}
    </EmptyLayoutWrapper>
  );
};

export default DefaultLayout;