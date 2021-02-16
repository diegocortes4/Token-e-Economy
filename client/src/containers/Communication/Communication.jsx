
// import "./style";
import { Form, Input, Button } from "antd";
import React, { useState } from "react";
import axios from "axios";
import communication from '../Communication/communication.css'

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 10,
  },
};
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
  },
};
const onFinish = (values) => {
  console.log(values);
};

const  Communication = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })
  const [inputs, setInputs] = useState({
    email: '',
    message: ''
  })
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      })
      setInputs({
        email: '',
        message: ''
      })
    } else {
      setStatus({
        info: { error: true, msg: msg }
      })
    }
  }
  const handleOnChange = e => {
    e.persist()
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    })
  }
  const handleOnSubmit = e => {
    e.preventDefault()
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/xyybazov',
      data: inputs
    })
      .then(response => {
        handleServerResponse(
          true,
          'Thank you, your message has been submitted.'
        )
      })
      .catch(error => {
        handleServerResponse(false, error.response.data.error)
      })
  }
  return (
    <main>
      <h1>Contact Us</h1>
      <hr />
      <div id="form-container">
      <form id="the-form-itself" onSubmit={handleOnSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="_name"
          onChange={handleOnChange}
          required
          value={inputs.name}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="_replyto"
          onChange={handleOnChange}
          required
          value={inputs.email}
        />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          onChange={handleOnChange}
          required
          value={inputs.message}
        />
        <button type="submit" disabled={status.submitting}>
          {!status.submitting
            ? !status.submitted
              ? 'Submit'
              : 'Submitted'
            : 'Submitting...'}
        </button>
      </form>
      </div>
      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
    </main>
  )
}

// const Communication = () => {
//   return (
//     <>
//       <Form
//         {...layout}
//         name="nest-messages"
//         onFinish={onFinish}
//         validateMessages={validateMessages}
//       >
//         <Form.Item
//           name={["user", "name"]}
//           label="Name"
//           rules={[{ required: true }]}
//         >
//           <Input />
//         </Form.Item>

//         <Form.Item
//           name={["user", "email"]}
//           label="Email"
//           rules={[{ type: "email", required: true }]}
//         >
//           <Input />
//         </Form.Item>

//         <Form.Item
//           name={["user", "message"]}
//           label="Message"
//           rules={[{ required: true }]}
//         >
//           <Input.TextArea />
//         </Form.Item>

//         <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
//           <Button type="primary" htmlType="submit">
//             Submit
//           </Button>
//         </Form.Item>
//       </Form>
      

//       {/* ReactDOM.render(<Demo />, mountNode); */}
//     </>
//   );
// };

export default Communication;
