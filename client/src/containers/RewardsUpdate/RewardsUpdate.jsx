import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Table, Space } from "antd";
import RewardFormUpdate from "../../components/RewardFormUpdate/RewardFormUpdate";

const { Column } = Table;

const Rewards = (props) => {
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
    const {
      match: { params },
    } = props;
    axios
      .put(`/api/rewards/${params.id}`, taskData)
      .then((response) => {
        console.log(response.data);
        getRewards();
        // setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const updateRewards = (id) => {};
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
              <a
                onClick={() => {
                  console.log(record._id);
                  updateRewards(record._id);
                }}
              >
                Completed
              </a>
              <a
                onClick={() => {
                  console.log(record._id);
                  // history.push(`/rewards/update/${record._id}`);
                  updateRewards(record._id);
                }}
              >
                Update
              </a>
              <a>Remove</a>
            </Space>
          )}
        />
      </Table>
      <RewardFormUpdate handleFormSubmit={handleFormSubmit} />
    </>
  );
};

export default Rewards;
