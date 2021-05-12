//Lib
//Icon
import Logo from "@Assets/icons/logo/sa_logo.png";
import ButtonSwitchLanguage from "@Common/ButtonSwitchLanguage/ButtonSwitchLanguage";
//Component
import { Img } from "@Components/common/HTMLTag/HTMLTag";
import React from "react";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
//Const
import { headerData } from "./const";
import LinkActive from "./LinkActive/LinkActive";
//styled
import { HeaderWrapper, NavigatorWrapper, SwitchLanguageWrapper } from "./styled";



const Header = () => {
  const { t, i18n } = useTranslation("common");

  return (
    <HeaderWrapper>
      <Link className="sa_logo" to="/">
        <Img src={Logo} />
      </Link>
      <NavigatorWrapper>
        {headerData.map((item, index) => {
          return <LinkActive key={index} to={item.path} navItemName={t(item.keyLang)} />;
        })}
      </NavigatorWrapper>
      <SwitchLanguageWrapper>
        <ButtonSwitchLanguage onChangeLanguage={(langType: string) => {
          i18n.changeLanguage(langType);
          localStorage.setItem('lang', langType)
        }} />
      </SwitchLanguageWrapper>
    </HeaderWrapper>
  );
};

export default Header;
