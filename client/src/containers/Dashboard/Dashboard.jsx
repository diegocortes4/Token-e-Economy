import React, { Component } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import "./Dashboard.css";
// import { json } from "express";

//Will need to run an api call to get all users.  Users returns an array.  Pick out the name and total tokens from the objects.
//Populate the arrays below
const data = {
  labels: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  datasets: [
    {
      label: "My First dataset",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [1, 5, 80, 81, 56, 55, 40],
    },
  ],
};

export default class Dashboard extends Component {
  state = { data: data };
  getUser = () => {
    axios
      .get(`/api/users/`)
      .then((response) => {
        console.log(response.data);
        const users = response.data.map((user) => user.name);
        const tokens = response.data.map((user) => user.token_total);
        console.log(tokens);
        const temp = { ...this.state.data };
        console.log(temp);
        temp.labels = users;
        temp.datasets.data = tokens;
        this.setState((data) => ({
          data: {
            ...data,
            labels: users,
            datasets: [
              { ...data.datasets, data: tokens, label: "Tokens by user" },
            ],
          },
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
      <h1 className="chart-text">Task Chart</h1>
        <Line ref="chart" data={this.state.data} />
      </div>
    );
  }
  componentDidMount() {
    this.getUser();
    const { datasets } = this.refs.chart.chartInstance.data;
  }
  // componentDidMount() {
  //   const { datasets } = this.refs.chart.chartInstance.data;
  //   console.log(datasets[0].data);
  // }
}
