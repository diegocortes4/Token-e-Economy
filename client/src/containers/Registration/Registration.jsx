import React from "react";
import { Form, Input, Tooltip, Select, Checkbox, Button } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
// import { FormInstance } from 'antd/lib/form';
import axios from "axios";

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
    lg: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
    lg: {
      span: 8,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const Registration = () => {
  // formRef = React.createRef<FormInstance>(value);

  //   onRoleChange = (value: string) => {
  //     switch (value) {
  //       case 'Clinician':
  //         this.formRef.current!.setFieldsValue({ note: 'Please enter the clinician name here.' });
  //         return;
  //       case 'Parent':
  //         this.formRef.current!.setFieldsValue({ note: 'Hi, lady!' });
  //         return;
  //       // case 'other':
  //       //   this.formRef.current!.setFieldsValue({ note: 'Hi there!' });
  //       //   return;
  //     }
  //   };

  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
    axios
      .post("/api/auth", values)
      .then((response) => console.log(response.data));
  };

  // onReset = () => {
  //   this.formRef.current!.resetFields();
  // };

  // onFill = () => {
  //   this.formRef.current!.setFieldsValue({
  //     note: 'Hello world!',
  //     gender: 'male',
  //   });
  // };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="1">+1</Option>
        <Option value="87">+886</Option>
      </Select>
    </Form.Item>
  );

  return (
    <>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        // ref={this.formRef} name="control-ref" onFinish={this.onFinish}
        initialValues={{
          prefix: "1",
        }}
        scrollToFirstError
      >
        <Form.Item
          name="role"
          label="Your Role"
          rules={[
            {
              required: true,
              message: "Please choose a role!",
            },
          ]}
        >
          <Select>
            <Select.Option value="Role">Clinician</Select.Option>
            <Select.Option value="Role">Parent</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="name"
          label={
            <span>
              Name&nbsp;
              <Tooltip title="Please enter the name of the child if you are a parent. Otherwise, please enter your name if you are a clinician.">
                <QuestionCircleOutlined />
              </Tooltip>
            </span>
          }
          rules={[
            {
              required: true,
              message:
                "Please enter a name based on the role you selected above!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="email"
          label={
            <span>
              Email Address&nbsp;
              <Tooltip title="This email address will be used as your login name.">
                <QuestionCircleOutlined />
              </Tooltip>
            </span>
          }
          rules={[
            {
              type: "email",
              message: "This is not valid E-mail address!",
            },
            {
              required: true,
              message: "Please enter your E-mail address",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please enter your password",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  "The passwords you entered do not match!"
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            {
              required: true,
              message: "Please enter your phone number!",
            },
          ]}
        >
          <Input
            addonBefore={prefixSelector}
            style={{
              width: "100%",
            }}
          />
        </Form.Item>

        <Form.Item
          name="token_type"
          label={
            <span>
              Default Token Type&nbsp;
              <Tooltip title="Please choose a token type that fits the child's interest.">
                <QuestionCircleOutlined />
              </Tooltip>
            </span>
          }
          rules={[
            {
              required: true,
              message: "Please choose a default token type!",
            },
          ]}
        >
          <Select>
            <Select.Option value="Token Type">Stickers</Select.Option>
            <Select.Option value="Token Type">Stars</Select.Option>
            <Select.Option value="Token Type">Points</Select.Option>
            <Select.Option value="Token Type">Coins</Select.Option>
            <Select.Option value="Token Type">Dollars</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(
                      "Please review and accept the agreement before creating an account!"
                    ),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            I have read and accept the <a href="">agreement</a>
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </>
  );
  // };
};

export default Registration;
