import React, { useState, useEffect } from "react";
import { useHistory, Redirect } from "react-router-dom";
import axios from "axios";
import { Table, Space } from "antd";
import RewardFormUpdate from "../../components/RewardFormUpdate/RewardFormUpdate";

const { Column } = Table;

const Rewards = (props) => {
  const [data, setData] = useState([]);
  const [description, set_description] = useState("");
  const [token_value, set_token_value] = useState("");
  const history = useHistory();
  const {
    match: { params },
  } = props;
  const getRewards = () => {
    axios
      .get(`/api/rewards/${params.id}`)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        set_description(response.data.description);
        set_token_value(response.data.token_value);
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
    // const {
    //   match: { params },
    // } = props;
    axios
      .put(`/api/rewards/${params.id}`, taskData)
      .then((response) => {
        console.log(response.data);
        getRewards();
        // <Redirect to="/rewards" />;
        //look for a react router dom way to redirect
        // window.location.href = "/rewards";
        history.push("/rewards");
        // setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const updateRewards = (id) => {};
  return (
    <>
      {/* <Table dataSource={data} rowKey="_id">
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
      </Table> */}
      <RewardFormUpdate
        {...data}
        handleFormSubmit={handleFormSubmit}
        set_description={set_description}
        description={description}
        set_token_value={set_token_value}
        token_value={token_value}
      />
    </>
  );
};

export default Rewards;
