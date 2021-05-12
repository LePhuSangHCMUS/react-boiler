import pageFailed from "@Assets/images/PageNotFound/404-failed.svg";
import { Image ,Typography } from "antd";
//Hocs
import withScrollToTop from "@Hocs/withScrollToTop";
import {
  Button
} from "antd";
import React from 'react';
import { useHistory } from "react-router-dom";
import {MainContent} from "./styled";
const { Paragraph } = Typography;

const PageNotFound = (props: any) => {
  const history = useHistory();

  return (
    <MainContent>
      <Image src={pageFailed}  preview={false} alt="img"></Image>
      <Paragraph>Trang này không hiển thị</Paragraph>
      <Paragraph>Có thể liên kết đã hỏng hoặc trang đã bị gỡ.
        Hãy kiểm tra xem liên kết mà bạn đang cố mở có chính xác không.</Paragraph>

      <Button onClick={()=>{
        history.push("/")
      }} >Đi tới trang chủ</Button>

    </MainContent>
  );
};

export default withScrollToTop(PageNotFound);
