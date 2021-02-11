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

const TaskForm = ({ handleFormSubmit }) => {
  const [task_name, set_task_name] = useState("");
  const [target_behavior, set_target_behavior] = useState("");
  const [token_value, set_token_value] = useState("");

  //   we should probably use camel case for our model fields
  //   do we need to change our API routes to axios?

  return (
    <>
      <h1>Create New Task</h1>
      {/* adding onSubmit to allow for clicking the button or pressing enter. Add above too.  Also installed axios on client*/}
      <Form
        {...layout}
        name="basic"
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        onSubmit={(e) => {
          handleFormSubmit(e, { task_name, target_behavior, token_value });
        }}
      >
        <Form.Item label="Task Name" name="task_name">
          <Input
            placeholder="Task Name"
            id="task_name"
            type="text"
            name="task_name"
            value={task_name}
            onChange={(e) => {
              set_task_name(e.target.value);
            }}
          />
        </Form.Item>

        <Form.Item label="Target Behavior" name="target_behavior">
          <Input
            placeholder="Task Behavior"
            id="target_behavior"
            type="text"
            name="target_behavior"
            value={target_behavior}
            onChange={(e) => {
              set_target_behavior(e.target.value);
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

        <button type="submit">Test Button</button>

        <Form.Item {...tailLayout}>
          <Button
            type="submit"
            htmlType="submit"
            onClick={(e) => {
              handleFormSubmit(e, { task_name, target_behavior, token_value });
            }}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default TaskForm;
