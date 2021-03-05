//Lib
import React from 'react';
//Components
import Header from '@Common/Header/Header';
import Footer from '@Common/Footer/Footer';
import { Div } from '@Common/TagAntdNotSupport/TagAntdNotSupport';
import ButtonDarkMode from '@Common/ButtonDarkMode/ButtonDarkMode';
import Notification from '@Pages/Notification/Notification';

//Styled
import './style.scss';

interface IProps {
  children: React.ReactNode;
}

const DefaultLayout = (props: IProps) => {
  const { children } = props;
  return (
    <Div className="sa_user_layout">
      <Header />
      <Div className="sa_main_content">{children}</Div>
      <Notification />
      <ButtonDarkMode />
      <Footer />
    </Div>
  );
};

export default DefaultLayout;
