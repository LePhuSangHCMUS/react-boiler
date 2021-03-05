//Lib
import React from 'react';
import { useSelector } from 'react-redux';
//Components
import Header from '@Common/Header/Header';
import Footer from '@Common/Footer/Footer';
import { Div } from '@Common/TagAntdNotSupport/TagAntdNotSupport';
import ButtonDarkMode from '@Common/ButtonDarkMode/ButtonDarkMode';
import Notification from '@Pages/Notification/Notification';
//Style
import './style.scss';
interface IProps {
  children: React.ReactNode;
}

const DefaultLayout = (props: IProps) => {
  const { children } = props;
  return (
    <div className="sa_default_layout">
      {/* <Header /> */}
      <Div className="sa_main_content">{children}</Div>
      <Notification />
      {/* <Footer /> */}
      <ButtonDarkMode />
    </div>
  );
};

export default DefaultLayout;
