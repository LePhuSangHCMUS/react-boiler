//Lib
import React from "react";
//Component
import { Img, Div, Input, Label, Span } from "@Common/TagAntdNotSupport/TagAntdNotSupport";
//Styled Component
// import DarkModeToggle from "react-dark-mode-toggle";
import useDarkMode from "use-dark-mode";
import { Switch } from "antd";
import "./styles.scss";
//Const

const ButtonDarkMode = (props: any) => {
  const darkMode = useDarkMode(false);

  return (
    <Div className="sa_button_dark_mode">
      <Input type="checkbox" id="theme-toggle" defaultChecked={localStorage.getItem("darkMode") === 'true' ? true : false} />
      <Label
        htmlFor="theme-toggle"
        onClick={() => {
          darkMode.toggle();
        }}>
        <Span></Span>
      </Label>
    </Div>
  );
};

export default ButtonDarkMode;
