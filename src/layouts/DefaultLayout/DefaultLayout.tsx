//Lib
import Footer from "@Common/Footer/Footer";
//Components
import Header from "@Common/Header/Header";
import Notification from "@Pages/Notification/Notification";
import React from "react";
//Styled
import { DefaultLayoutWrapper } from "./styled";
interface IProps {
  children: React.ReactNode;
}

const DefaultLayout = (props: IProps) => {

  const { children } = props;
  return (
    <DefaultLayoutWrapper>
      <Header />
        {children}
      <Notification />
      <Footer />
    </DefaultLayoutWrapper>
  )
};

export default DefaultLayout;