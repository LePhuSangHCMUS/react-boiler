//Lib
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

//style
import "./style.scss";
//Component
import { Div, Img } from "@Common/TagAntdNotSupport/TagAntdNotSupport";
import LinkActive from "./LinkActive/LinkActive";
import ButtonSwitchLanguage from "@Common/ButtonSwitchLanguage/ButtonSwitchLanguage"

//Const
import { headerData } from "./const";
//Icon
import Logo from "@Assets/icons/logo/sa_logo.png"

const Header = () => {
  const { t, i18n } = useTranslation("common");

  return (
    <Div className="sa_header">
      <Link className="sa_logo" to="/">
        <Img src={Logo} />
      </Link>
      <Div className="sa_navigator">
        {headerData.map((item, index) => {
          return <LinkActive key={index} to={item.path} navItemName={t(item.keyLang)} />;
        })}
      </Div>
      <Div className="sa_switch_language">
        <ButtonSwitchLanguage onChangeLanguage={(langType: string) => {
          i18n.changeLanguage(langType);
          localStorage.setItem('lang', langType)
        }} />
      </Div>
    </Div>
  );
};

export default Header;
