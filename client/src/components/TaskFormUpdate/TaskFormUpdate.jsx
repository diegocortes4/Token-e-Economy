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

const TaskForm = ({
  handleFormSubmit,
  task_name,
  target_behavior,
  clinician_notes,
  token_value,
  set_task_name,
  set_target_behavior,
  set_clinician_notes,
  set_token_value,
}) => {
  console.log(task_name);
  console.log(token_value);
  return (
    <>
      <h1>Update Task</h1>

      <Form
        {...layout}
        name="basic"
        onSubmit={(e) => {
          handleFormSubmit(e, {
            task_name,
            target_behavior,
            clinician_notes,
            token_value,
          });
        }}
      >
        <Form.Item label="Task Name">
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

        <Form.Item label="Target Behavior">
          <Input
            placeholder="Target Behavior"
            id="target_behavior"
            type="text"
            name="target_behavior"
            value={target_behavior}
            onChange={(e) => {
              set_target_behavior(e.target.value);
            }}
          />
        </Form.Item>

        <Form.Item label="Clinician Notes">
          <Input
            placeholder="Clinician Notes"
            id="clinician_notes"
            type="text"
            name="clinician_notes"
            value={clinician_notes}
            onChange={(e) => {
              set_clinician_notes(e.target.value);
            }}
          />
        </Form.Item>

        <Form.Item label="Token Received">
          <Input
            placeholder="Token Received"
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
              handleFormSubmit(e, {
                task_name,
                target_behavior,
                clinician_notes,
                token_value,
              });
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
