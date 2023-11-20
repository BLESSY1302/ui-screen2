import React, { useState } from 'react';
import { Card, Button, Form, Input } from 'antd';
import { useNavigate, Link } from 'react-router-dom'; // Changed from useHistory to useNavigate
import ACMSDataService from '../services/acms.service';
// Import ACMSDataService or your actual service for API calls

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Changed from useHistory to useNavigate

  const onChangeUserName = (e) => {
    setUserName(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  
  const validateLogin = async () => {
    try {

    //   const apiUrl = 'http://localhost:8080/acms'; // Replace with your actual backend URL
    // console.log('API URL:', apiUrl);

        const response = await ACMSDataService.login({
            userName: userName,
            password: password,
        });

        if (response.data) {
            console.log('Login successful:', true);
            // Navigate to the '/create' page
            navigate.push('/create');
        } else {
            console.log('Login unsuccessful:', false);
        }
    } catch (error) {
        console.error('An error occurred during login:', error);
    }
};


  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card
        title="LOGIN"
        bordered={false}
        headStyle={{
          backgroundColor: '#00008B',
          color: '#fff',
        }}
        style={{
          width: 300,
          border: '2px solid #00008B',
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="userName"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input style={{ borderColor: '#00008B', borderRadius: '2px' }} value={userName} onChange={onChangeUserName} />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password style={{ borderColor: '#00008B', borderRadius: '2px' }} value={password} onChange={onChangePassword} />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
            style={{
              marginTop: '10px',
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              onClick={validateLogin}
              style={{ backgroundColor: '#00008B' }}
            >
              Login
            </Button>
          </Form.Item>
        </Form>
        <Link to="/create"></Link> {/* Link to the Create page */}
      </Card>
    </div>
  );
};

export default Login;
