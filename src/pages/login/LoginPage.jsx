import React, { useEffect } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { LOCATIONS } from 'constants/index';
import {axiosAdmin} from 'helper/axiosClient';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const token = window.localStorage.getItem('TOKEN');

  const onLogin = async (values) => {
    try {
    // nv03@gmail.com 
    //   123456
      const url = '/employees/login';    

      const res = await axiosAdmin.post(url, values);
      const {token, refreshToken} = res.data; 
      window.localStorage.setItem('TOKEN', token);
      window.localStorage.setItem('REFRESH_TOKEN', refreshToken); 
      axiosAdmin.defaults.headers.Authorization = `Bearer ${token}`;

      // axiosClient.defaults.headers.common['Authorization']= `Bearer ${token}`; 
      if (token) {
        navigate(LOCATIONS.PRODUCTS_PAGE);
      }
    } catch (err) {
      console.error('««««« err »»»»»', err);
    }
  };

  const onFinishFailed  = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  useEffect(() => {
    if (token) {
      navigate(LOCATIONS.PRODUCTS_PAGE);
    }
  }, []);
  
  return (
    <div className='d-flex justify-content-center mt-5'> 
 <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onLogin}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email!" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
    </div>
   
  );
};
export default LoginPage;

