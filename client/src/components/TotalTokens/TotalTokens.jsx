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

// import React, { Component } from "react";

// class TotalTokens extends Component {

// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       clicks: 0,
// //       show: true,
// //     };
// //   }

// //   // IncrementItem = () => {
// //   //   this.setState({ clicks: this.state.clicks + 5 });
// //   // }
// //   // DecreaseItem = () => {
// //   //   this.setState({ clicks: this.state.clicks - 5 });
// //   // }
// //   ToggleClick = () => {
// //     this.setState({ show: !this.state.show });
// //   };

// //   render() {
// //     return (
// //       <div>
// //         {/* <button onClick={this.IncrementItem}>Click to increment by 5</button>
// //         <button onClick={this.DecreaseItem}>Click to decrease by 5</button> */}
// //         <h1>Total Tokens</h1>
// //         <button onClick={this.ToggleClick}>
// //           {this.state.show ? "Hide number" : "Show number"}
// //         </button>
// //         {this.state.show ? <h2>{this.state.clicks}</h2> : ""}
// //       </div>
// //     );
// //   }
// // }

// export default TotalTokens;
