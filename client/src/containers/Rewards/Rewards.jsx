import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Space } from "antd";
import RewardForm from "../../components/RewardForm/RewardForm";

const { Column } = Table;

const Rewards = () => {
  const [data, setData] = useState([]);
  const getRewards = () => {
    axios
      .get("/api/rewards")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getRewards();
  }, []);
  const handleFormSubmit = (e, taskData) => {
    console.log(taskData);
    e.preventDefault();
    axios
      .post("/api/rewards", taskData)
      .then((response) => {
        console.log(response.data);
        getRewards();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Table dataSource={data} rowKey="_id">
        <Column title="Reward Name" dataIndex="description" key="description" />
        <Column title="Token Value" dataIndex="token_value" key="token_value" />
        <Column
          title="Action"
          key="action"
          render={(text, record) => (
            <Space size="middle">
              <a
                onClick={() => {
                  console.log(text._id, record._id);
                }}
              >
                Completed
              </a>
              <a>Update</a>
              <a>Remove</a>
            </Space>
          )}
        />
      </Table>
      <RewardForm handleFormSubmit={handleFormSubmit} />
    </>
  );
};

export default Rewards;
