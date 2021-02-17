import React from "react";
import axios from "axios";
import { Form, Input, Button, Checkbox, Image, Space } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import jwt from "jsonwebtoken";
import "./Login.css";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const history = useHistory();

  const onFinish = (values: any) => {
    console.log("Success:", values);
    axios
      .post("/api/auth/login", {
        email: values.username,
        password: values.password,
      })
      .then((response) => {
        console.log(response.data);
        sessionStorage.setItem("currentuserid", response.data.id);
        jwt.verify(
          response.data.token,
          process.env.REACT_APP_JWT_SIGNATURE,
          (err, decoded) => {
            if (err) {
              console.log(err);
            } else {
              setToken(response.data.token);
              history.push("/task/" + response.data.id);
            }
          }
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <span>
        <img
          preview={false}
          src="./img/token-e-economy.jpg"
          alt="Clinician-Work-With-Child"
          className="app-logo"
        />
      </span>
      <h1 className="tagline">
        An Effective Token Economy Platform to Motivate Child Behavior
      </h1>
      <div className="space-align-container">
        <Image
          preview={false}
          width="500"
          src="./img/Clinician-Work-With-Child.jpeg"
          alt="Clinician-Work-With-Child"
        />
      </div>
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

          <a
            className="login-form-forgot"
            href="mailto:someone@yoursite.com?subject=Password Reset!&body=Dear Admin, please help me reset my password. My username is ______. Thank you!"
            role="button"
          >
            Forgot Password
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
          Or{" "}
          <Link to="/registration" className="nav-link">
            {" "}
            Register Now!
          </Link>
        </Form.Item>
      </Form>
    </>
  );
};

export default Login;
