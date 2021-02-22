

//Lib
import React from 'react';
//Component
import { Select } from "antd";
import { Img } from "@Common/TagAntdNotSupport/TagAntdNotSupport";
//Styled Component
import "antd/dist/antd.css";
import "./styles.scss";
//Const
import { countryFlags } from "./const"

interface IProps {
  onChangeLanguage: Function;
}
const { Option } = Select;


const ButtonSwitchLanguage: React.FC<IProps> = (props) => {
  const langType = localStorage.getItem('lang');
  const { onChangeLanguage } = props
  return (
    <Select
      style={{ width: "80px" }}
      // showSearch
      defaultValue={langType ? langType : "en"}
      onChange={(value) => {
        onChangeLanguage(value)
      }}
    >
      {countryFlags.map(item => {
        return <Option key={item.key}
          value={item.value}
        >
          <Img className="sa_flag-icon" src={item.flagIcon} alt={item.alt} />
        </Option>
      })}
    </Select>
  );
};

export default ButtonSwitchLanguage;