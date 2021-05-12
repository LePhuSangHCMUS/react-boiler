//Library
import HelmetTag from "@Common/HelmetTag/HelmetTag";
//Meta
import meta from "@Metas/login";
//Action
import { loginAction } from "@Reduxs/Login/action";
import { Checkbox, Form, Input } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
//Styles
import { MainContent } from "./styled";



const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};


// ==================  PAGE START   ===================
const Demo = () => {
//==================  CONST
  const { t, i18n } = useTranslation("common");
//===================  REDUX
const dispatch = useDispatch()
// ==================  FUNCTION 
  const onFinish = (values?: any) => {

    dispatch(loginAction({
      username:values?.username,
      password:values?.password
    
    }))
    // console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    // console.log('Failed:', errorInfo);
  };
// ==================  HOOK

// ==================  MAIN START   ===================
  return (<MainContent>
    <HelmetTag meta={meta} />
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label={t("LOGIN_USERNAME")}
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={t("LOGIN_PASSWORD")}
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>{t('LOGIN_REMEMBERME')}</Checkbox>
      </Form.Item>

      {/* <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item> */}
    </Form>
  </MainContent>
  );
};

export default Demo;