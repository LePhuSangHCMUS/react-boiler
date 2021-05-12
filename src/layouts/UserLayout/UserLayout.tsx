//Lib
import React from "react";
//Components
import Header from "@Common/Header/Header";
import Footer from "@Common/Footer/Footer";
import { Div } from "@Components/common/HTMLTag/HTMLTag"
import ButtonDarkMode from "@Common/ButtonDarkMode/ButtonDarkMode"
import Notification from "@Pages/Notification/Notification"

//Styled
import { UserLayoutWrapper } from "./styled";

interface IProps {
  children: React.ReactNode;
}

const DefaultLayout = (props: IProps) => {
  const { children } = props;
  return (
    <UserLayoutWrapper>
      <Header />
        {children}
      <Notification />
      <ButtonDarkMode />
      <Footer />
    </UserLayoutWrapper>
  );
};

export default DefaultLayout;