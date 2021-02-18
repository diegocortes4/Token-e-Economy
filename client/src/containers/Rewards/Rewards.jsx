import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Table, Space } from "antd";
import RewardForm from "../../components/RewardForm/RewardForm";
import TotalTokens from "../../components/TotalTokens/TotalTokens";
import { set } from "mongoose";
import "./Rewards.css";

const { Column } = Table;

const Rewards = () => {
  const userId = sessionStorage.getItem("currentuserid");
  const [data, setData] = useState([]);
  const [tokenData, setTokenData] = useState([]);
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
    getUser();
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

  const handleRedeem = (id) => {
    axios
      .put(`/api/rewards/${id}/redeem/user/${userId}`)
      .then(() => {
        getRewards();
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
      <h1 className="rewards-text">Rewards</h1>
      <Table dataSource={data} rowKey="_id">
        <Column title="Reward Name" dataIndex="description" key="description" />
        <Column title="Token Value" dataIndex="token_value" key="token_value" />
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
                Redeem
              </a>
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
      <TotalTokens
        handleFormSubmit={handleFormSubmit}
        getUser={getUser}
        data={[tokenData]}
      />
      <RewardForm handleFormSubmit={handleFormSubmit} />
    </>
  );
};

export default Rewards;
