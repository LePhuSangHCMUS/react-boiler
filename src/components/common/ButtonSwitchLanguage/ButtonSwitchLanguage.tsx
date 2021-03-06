

//Lib
//Component
import { Image, Select } from "antd";
//Styled Component
import "antd/dist/antd.css";
import React from 'react';
//Const
import { countryFlags } from "./const";

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
          <Image style={{width: "30px"}}  src={item.flagIcon} preview	={false} alt={item.alt} />
        </Option>
      })}
    </Select>
  );
};

export default ButtonSwitchLanguage;