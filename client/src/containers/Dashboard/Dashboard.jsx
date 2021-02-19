import React, { Component } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
// import { json } from "express";

//Will need to run an api call to get all users.  Users returns an array.  Pick out the name and total tokens from the objects.
//Populate the arrays below
const initialData = {
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
  state = { chartData: initialData };
  getUser = () => {
    axios
      .get(`/api/users/`)
      .then((response) => {
        const users = response.data.map((user) => user.name);
        const tokens = response.data.map((user) => user.token_total);

        this.setState((prevState) => ({
          chartData: {
            labels: users,
            datasets: [
              {
                ...prevState.chartData.datasets[0],
                data: tokens,
                label: "Tokens by user",
              },
            ],
          },
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getUser();
  }

  render() {
    return (
      <div>
        <h2>Task Rewards Chart</h2>
        <Line data={this.state.chartData} />
      </div>
    );
  }
}
