import React, { useState, useEffect } from "react";
import { useHistory, Redirect } from "react-router-dom";
import axios from "axios";
import { Table, Space } from "antd";
import TaskFormUpdate from "../../components/TaskFormUpdate/TaskFormUpdate";

const { Column } = Table;

const Task = (props) => {
  const [data, setData] = useState([]);
  const [task_name, set_task_name] = useState("");
  const [target_behavior, set_target_behavior] = useState("");
  const [clinician_notes, set_clinician_notes] = useState("");
  const [token_value, set_token_value] = useState("");
  const history = useHistory();
  const {
    match: { params },
  } = props;
  const getTasks = () => {
    axios
      .get(`/api/tasks/${params.id}`)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        set_task_name(response.data.task_name);
        set_target_behavior(response.data.target_behavior);
        set_clinician_notes(response.data.clinician_notes);
        set_token_value(response.data.token_value);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getTasks();
  }, []);
  const handleFormSubmit = (e, taskData) => {
    console.log(taskData);
    e.preventDefault();
    axios
      .put(`/api/tasks/${params.id}`, taskData)
      .then((response) => {
        console.log(response.data);
        getTasks();
        // history.push("/task");
        history.goBack();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const updateTask = (id) => {};
  return (
    <>
      <TaskFormUpdate
        {...data}
        handleFormSubmit={handleFormSubmit}
        set_task_name={set_task_name}
        task_name={task_name}
        set_target_behavior={set_target_behavior}
        target_behavior={target_behavior}
        set_clinician_notes={set_clinician_notes}
        clinician_notes={clinician_notes}
        set_token_value={set_token_value}
        token_value={token_value}
      />
    </>
  );
};

export default Task;
