import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Table, Space } from "antd";
import TaskForm from "../../components/TaskForm/TaskForm";

const { Column } = Table;

// const dataOld = [
//   {
//     key: "1",
//     taskName: "Wash Dishes",
//     tokenReceived: "5",
//   },
//   {
//     key: "2",
//     taskName: "Clean Room",
//     tokenReceived: "5",
//   },
//   {
//     key: "3",
//     taskName: "Brush Teeth",
//     tokenReceived: "2",
//   },
//   {
//     key: "4",
//     taskName: "Do Homework",
//     tokenReceived: "3",
//   },
//   {
//     key: "5",
//     taskName: "Make Bed",
//     tokenReceived: "3",
//   },
// ];

const Task = () => {
  const [data, setData] = useState([]);
  const history = useHistory();
  const getTasks = () => {
    axios
      .get("/api/tasks")
      .then((response) => {
        console.log(response.data);
        // loop through all the tasks and filter the tasks

        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getTasks();
  }, []);
  const handleFormSubmit = (e, taskData) => {
    console.log(taskData);
    e.preventDefault();
    taskData.user_id = "60299d7a80a4a20714564d86";
    taskData.task_completed = Boolean(false);
    axios
      .post("/api/tasks", taskData)
      .then((response) => {
        console.log(response.data);
        getTasks();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const updateTask = (id) => {
    axios
      .put(`/api/tasks/${id}`, {
        task_name: "update",
        target_behavior: "update",
        clinician_notes: "update",
        token_value: 5,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteTask = (id) => {
    axios
      .delete(`/api/tasks/${id}`)
      .then(() => {
        getTasks();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Table dataSource={data} rowKey="_id">
        <Column title="Task Name" dataIndex="task_name" key="task_name" />
        <Column
          title="Target Behavior"
          dataIndex="target_behavior"
          key="target_behavior"
        />
        <Column
          title="Clinician Notes"
          dataIndex="clinician_notes"
          key="clinician_notes"
        />
        <Column
          title="Token Received"
          dataIndex="token_value"
          key="token_value"
        />
        <Column
          title="Action"
          key="action"
          render={(record) => (
            <Space size="middle">
              <a>Completed</a>
              <a
                onClick={() => {
                  console.log(record._id);
                  history.push(`/task/update/${record._id}`);
                }}
              >
                Update
              </a>
              <a
                onClick={() => {
                  console.log(record._id);
                  deleteTask(record._id);
                }}
              >
                Remove
              </a>
            </Space>
          )}
        />
      </Table>
      <TaskForm handleFormSubmit={handleFormSubmit} />
    </>
  );
};

export default Task;
