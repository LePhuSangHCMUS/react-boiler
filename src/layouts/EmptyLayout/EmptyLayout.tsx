//Lib
import React from 'react';
//Components
import Header from '@Common/Header/Header';
import Footer from '@Common/Footer/Footer';
import { Div } from '@Common/TagAntdNotSupport/TagAntdNotSupport';
import ButtonDarkMode from '@Common/ButtonDarkMode/ButtonDarkMode';
//Style
import './style.scss';
interface IProps {
  children: React.ReactNode;
}

const DefaultLayout = (props: IProps) => {
  const { children } = props;
  return (
    <div className="sa_default_layout">
      <Div className="sa_main_content">{children}</Div>
    </div>
  );
};

export default DefaultLayout;
