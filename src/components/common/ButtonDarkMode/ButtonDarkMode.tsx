//Lib
//Component
import { Input, Label, Span } from "@Components/common/HTMLTag/HTMLTag";
import React from "react";
import useDarkMode from "use-dark-mode";
//Styled Component
import { ButtonDarkModeWrapper } from "./styled";
//Const

const ButtonDarkMode = (props: any) => {
const {toggleTheme,theme} =props;
  return (
    <ButtonDarkModeWrapper>
      <Input type="checkbox" id="theme-toggle" defaultChecked={theme === 'dark' ? true : false} />
      <Label
        htmlFor="theme-toggle"
        onClick={() => {
          toggleTheme()
        }}>
        <Span></Span>
      </Label>
    </ButtonDarkModeWrapper>
  );
};

export default ButtonDarkMode;
