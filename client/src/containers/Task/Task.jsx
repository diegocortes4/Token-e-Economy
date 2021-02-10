import React from "react";

import { Table, Space } from "antd";

const { Column } = Table;

const data = [
  {
    key: "1",
    taskName: "Wash Dishes",
    tokenReceived: "5",
  },
  {
    key: "2",
    taskName: "Clean Room",
    tokenReceived: "5",
  },
  {
    key: "3",
    taskName: "Brush Teeth",
    tokenReceived: "2",
  },
  {
    key: "4",
    taskName: "Do Homework",
    tokenReceived: "3",
  },
  {
    key: "5",
    taskName: "Make Bed",
    tokenReceived: "3",
  },
];

const Task = () => {
  return (
    <>
      <Table dataSource={data}>
        <Column title="Task Name" dataIndex="taskName" key="taskName" />
        <Column
          title="Token Received"
          dataIndex="tokenReceived"
          key="tokenReceived"
        />
        <Column
          title="Action"
          key="action"
          render={(text, record) => (
            <Space size="middle">
              <a>Completed</a>
              <a>Update</a>
              <a>Remove</a>
            </Space>
          )}
        />
      </Table>
    </>
  );
};

export default Task;
