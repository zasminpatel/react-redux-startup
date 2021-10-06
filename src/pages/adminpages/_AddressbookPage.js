import { Button, Form, Input, Row, Icon } from "antd";
import React from "react";

class AddressbookPage extends React.Component {
  //https://www.cluemediator.com/add-or-remove-input-fields-dynamically-with-reactjs
  state = {
    title: "t",
    firstname: "f",
    lastname: "l",
    phone: [{ number: "1" }, { number: "2" }],
    address: [{ address1: "", address2: "" }],
    loading: false
  };
  AddPhone = () => {
    this.setState((prevState) => ({
      phone: [...prevState.phone, { number: "" }]
    }));
  };
  RemovePhone = (index) => {
    debugger;
  };
  handlePhoneChange = (e, i) => {
    const { name, value } = e.target;
    var phone = [...this.state.phone];
    phone[i][name] = value;
    this.setState((prevState) => ({
      phone: phone
    }));
  };
  handleAddressChange = (e, i) => {
    const { name, value } = e.target;
    var address = [...this.state.address];
    address[i][name] = value;

    this.setState((prevState) => ({
      address: address
    }));
  };
  RemoveAddress = (index) => {
    const address = [...this.state.address];
    address.splice(index, 1);

    this.setState((prevState) => ({ address }));
  };
  AddAddress = () => {
    this.setState((prevState) => ({
      address: [...prevState.address, { address1: "", address2: "" }]
    }));
  };
  onFinish = (data) => {
    debugger;
    console.log(data);
    this.setState(data);
  };
  onFinishFailed = (data) => {
    console.log(data);
  };
  singleTextChange = (e) => {
    console.log(e.target.value);
    debugger;
    const { name, value } = e.target;
    this.setState((prevState) => ({
      [name]: [value]
    }));
  };

  render() {
    const phoneItems = this.state.phone.map((item, index) => (
      <div>
        <Row wrapperCol={{ offset: 8, span: 16 }}>
          <Form.Item label="Phone" name={"number" + index}>
            <Input />
          </Form.Item>
          <Form.Item>
            {this.state.phone.length > 1 ? (
              <Icon
                className="dynamic-delete-button"
                type="minus-circle-o"
                onClick={() => this.RemovePhone(item)}
              />
            ) : null}
          </Form.Item>
        </Row>
      </div>
    ));
    return (
      <div
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280
        }}
      >
        <Form
          name="basic"
          layout="vertical"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          // initialValues={{ remember: true }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          {/* <Form.Item
            label="Title"
            rules={[{ required: true, message: "Please input your username!" }]}
            name={this.state.title}
            onChange={this.singleTextChange}
          >
            <Input />
          </Form.Item> */}
          <Form.Item
            label="Title"
            rules={[{ required: true, message: "Please input title!" }]}
            name="title"
          >
            <Input />
          </Form.Item>
          <Form.Item label="First Name" name="firstname">
            <Input />
          </Form.Item>
          <Form.Item label="Last Name" name="lastname">
            <Input />
          </Form.Item>
          <div>{phoneItems}</div>
          <Button type="primary" htmlType="button" onClick={this.AddPhone}>
            Add
          </Button>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        <div>Add Edit</div>
        <p>add new address.</p>
        <div>{JSON.stringify(this.state)}</div>
        <div>
          {this.state.phone.map((item, index) => (
            <input
              key={index}
              name="number"
              onChange={(item) => this.handlePhoneChange(item, index)}
              value={item.number}
            />
          ))}
        </div>
        <Button onClick={this.AddPhone}>Add</Button>
        <br />
        <br />
        <div>
          {this.state.address.map((item, index) => (
            <div>
              <input
                key={index}
                name="address1"
                value={item.address1}
                onChange={(item) => this.handleAddressChange(item, index)}
              />
              <input
                className="ml10"
                key={index}
                name="address2"
                value={item.address2}
                onChange={(item) => this.handleAddressChange(item, index)}
              />
              <div className="btn-box">
                {this.state.address.length !== 1 && (
                  <button
                    className="mr10"
                    onClick={() => this.RemoveAddress(index)}
                  >
                    Remove
                  </button>
                )}
                {this.state.address.length - 1 === index && (
                  <button onClick={this.AddAddress}>Add</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default AddressbookPage;
// const AddressbookPage = () => {
//   return <h1>Welcome to Admin - Add / Edit.</h1>;
// };
// export default AddressbookPage;
