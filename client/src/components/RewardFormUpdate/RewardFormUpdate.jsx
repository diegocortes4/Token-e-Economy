import React from "react";
import { Form, Input, Button } from "antd";
import { useState } from "react";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const RewardForm = ({ handleFormSubmit }) => {
  const [description, set_description] = useState("");
  const [token_value, set_token_value] = useState("");

  return (
    <>
      <h1>Update Reward</h1>

      <Form
        {...layout}
        name="basic"
        onSubmit={(e) => {
          handleFormSubmit(e, { description, token_value });
        }}
      >
        <Form.Item label="Reward Description" name="description">
          <Input
            placeholder="Reward Description"
            id="description"
            type="text"
            name="description"
            value={description}
            onChange={(e) => {
              set_description(e.target.value);
            }}
          />
        </Form.Item>

        <Form.Item label="Token Value" name="token_value">
          <Input
            placeholder="Token Value"
            id="token_value"
            type="number"
            name="token_value"
            value={token_value}
            onChange={(e) => {
              set_token_value(e.target.value);
            }}
          />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button
            type="submit"
            htmlType="submit"
            onClick={(e) => {
              handleFormSubmit(e, { description, token_value });
            }}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default RewardForm;
