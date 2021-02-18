import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "antd";

const { Column } = Table;

const TotalTokens = ({ getUser, data }) => {
  console.log(sessionStorage.getItem("currentuserid"));

  // useEffect(() => {
  //   getUser();
  // }, []);
  console.log(data);
  return (
    <>
      <Table dataSource={data} rowKey="_id">
        <Column
          title="Total Tokens"
          dataIndex="token_total"
          key="token_total"
        />
      </Table>
    </>
  );
};

export default TotalTokens;
