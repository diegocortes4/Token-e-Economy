import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Table, Typography, Space, Row, Col } from "antd";
import TaskForm from "../../components/TaskForm/TaskForm";
import TotalTokens from "../../components/TotalTokens/TotalTokens";
import { set } from "mongoose";
import "./Task.css";

const { Column } = Table;

const Task = () => {
  const { Text } = Typography;
  const userId = sessionStorage.getItem("currentuserid");
  const [data, setData] = useState([]);
  const [tokenData, setTokenData] = useState([]);
  const history = useHistory();
  const getTasks = () => {
    axios
      .get("/api/tasks")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getTasks();
    getUser();
  }, []);
  const handleFormSubmit = (e, taskData) => {
    console.log(taskData);
    e.preventDefault();
    // taskData.user_id = "60299d7a80a4a20714564d86";
    // taskData.task_completed = Boolean(false);
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
  const Completed = (id) => {
    axios
      .put(``, {
        // /api/tasks/${id}
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

  const handleRedeem = (id) => {
    axios
      .put(`/api/tasks/${id}/complete/user/${userId}`)
      .then(() => {
        getTasks();
        getUser();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getUser = () => {
    axios
      .get(`/api/users/${userId}`)
      // .get("/api/users")
      .then((response) => {
        console.log(response.data);
        setTokenData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <h1 className="task-text">Task</h1>
      <p></p>
      <Row>
        <Col span={24}></Col>
      </Row>
      <Row>
        <Col span={6}></Col>
        <Col span={12}>
          <Text mark>
            A token economy system is one of the fastest and most effective ways
            to get kids to follow the rules. Similar to a traditional reward
            system, kids earn tokens throughout the day. Then, tokens can be
            exchanged for bigger rewards. The following page helps you track
            your child's completed tasks with the associated number of tokens.
            Please click the "completed" button next to the task your child
            performs based on the definition specified in Target Behavior and
            Clinician Notes. Later, your child should be able to exchange the
            received tokens with various rewards on the Rewards page.
          </Text>
        </Col>
        <Col span={6}></Col>
      </Row>
      <p></p>
      <p></p>

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
              <a
                onClick={() => {
                  handleRedeem(record._id);
                }}
              >
                Completed
              </a>
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
      <TotalTokens
        handleFormSubmit={handleFormSubmit}
        getUser={getUser}
        data={[tokenData]}
      />
      <TaskForm handleFormSubmit={handleFormSubmit} />
    </>
  );
};

export default Task;
