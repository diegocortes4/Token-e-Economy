import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Table, Space } from "antd";
import RewardForm from "../../components/RewardForm/RewardForm";
import TotalTokens from "../../components/TotalTokens/TotalTokens";

const { Column } = Table;

const Rewards = () => {
  const [data, setData] = useState([]);
  const history = useHistory();
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
  const updateRewards = (id) => {
    axios
      .put(`/api/rewards/${id}`, { description: "update", token_value: 5 })
      .then((response) => {
        console.log(response.data);
        // setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteRewards = (id) => {
    axios
      .delete(`/api/rewards/${id}`)
      .then(() => {
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
          render={(record) => (
            <Space size="middle">
              <a>Redeem</a>
              <a
                onClick={() => {
                  console.log(record._id);
                  history.push(`/rewards/update/${record._id}`);
                  // updateRewards(record._id);
                }}
              >
                Update
              </a>
              <a
                onClick={() => {
                  console.log(record._id);
                  deleteRewards(record._id);
                }}
              >
                Remove
              </a>
            </Space>
          )}
        />
      </Table>
      <TotalTokens handleFormSubmit={handleFormSubmit} />
      <RewardForm handleFormSubmit={handleFormSubmit} />
    </>
  );
};

export default Rewards;
