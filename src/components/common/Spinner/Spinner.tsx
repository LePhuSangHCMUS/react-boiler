//Lib
import React from 'react';
import {Spin} from "antd"
//Component
import { Div} from "@Common/TagAntdNotSupport/TagAntdNotSupport"
//Styled Component
import "./style.scss"
//Img
//Const

const Spinner = (props: any) => {
    <Div className="sa_spinner">
        <Spin tip="loading..."/>
    </Div>
};

export default (Spinner);
