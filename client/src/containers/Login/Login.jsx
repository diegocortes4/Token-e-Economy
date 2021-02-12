import React from "react";
import axios from "axios";
import { Form, Input, Button, Checkbox } from "antd";
import { useState } from "react";
// import { useHistory } from "react-router-dom";
// import jwt from "jsonwebtoken";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const Login = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // const history = useHistory();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/auth/login", { username, password })
      .then((response) => {
        console.log(response.data);
        // jwt.verify(
        //   response.data.token,
        //   process.env.REACT_APP_JWT_SIGNATURE,
        //   (err, decoded) => {
        //     if (err) {
        //       console.log(err);
        //     } else {
        //       setToken(response.data.token);
        //       history.push("/admin");
        //     }
        //   }
        // );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <h1>Token-e-Economy</h1>

      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          id="username"
          type="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          id="password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </>
  );
};

export default Login;
