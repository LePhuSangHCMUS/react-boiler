//Lib
//Component
import { Input, Label, Span } from "@Components/common/HTMLTag/HTMLTag";
import React from "react";
import useDarkMode from "use-dark-mode";
//Styled Component
import { ButtonDarkModeWrapper } from "./styled";
//Const

const ButtonDarkMode = (props: any) => {
  const darkMode = useDarkMode(false);

  return (
    <ButtonDarkModeWrapper>
      <Input type="checkbox" id="theme-toggle" defaultChecked={localStorage.getItem("darkMode") === 'true' ? true : false} />
      <Label
        htmlFor="theme-toggle"
        onClick={() => {
          darkMode.toggle();
        }}>
        <Span></Span>
      </Label>
    </ButtonDarkModeWrapper>
  );
};

export default ButtonDarkMode;
