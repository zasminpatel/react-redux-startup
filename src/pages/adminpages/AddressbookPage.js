import React from "react";
import { Button, Form, Input, Row, Col, Divider } from "antd";
import AddressBookService from "services/addressbookService";
import "./AddressbookPage.css";
//https://codesandbox.io/s/jnpjpj2p55
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 }
};
class AddressbookNew extends React.Component {
  constructor(props) {
    super(props);
  }
  formRef = React.createRef();
  state = {
    id: 0,
    title: "initial title",
    firstname: "",
    lastname: "",
    phones: [{ masterid: 0, number: "" }],
    address: [{ masterid: 0, address1: "", address2: "" }],
    loading: false
  };
  componentDidMount() {
    this.getNewData();
  }
  getNewData = () => {
    const id = this.props.match.match.params.id;
    // const data = AddressBookService.Get(id);
    debugger;
    if (id > 0) {
      this.setState({
        id: id,
        title: "edit title" + id,
        firstname: "edit f name",
        lastname: "",
        phones: [{ masterid: id, number: "" }],
        address: [{ masterid: id, address1: "", address2: "" }]
      });
      this.formRef.current.setFieldsValue({
        id: id,
        title: "edit title" + id,
        firstname: "edit f name",
        lastname: "",
        phones: [{ masterid: id, number: "" }],
        address: [{ masterid: id, address1: "", address2: "" }]
      });
    }
  };
  componentDidUpdate(prevProps) {
    if (this.props.match.match.params.id !== prevProps.match.match.params.id) {
      this.getNewData();
    }
  }
  addPhone = () => {
    this.setState((prevState) => ({
      phones: [...prevState.phones, { masterid: 0, number: "" }]
    }));
  };
  removePhone = (index) => {
    const phone = [...this.state.phones];
    phone.splice(index, 1);
    this.setState((prevState) => ({ phone }));
  };
  addAddress = () => {
    this.setState((prevState) => ({
      address: [
        ...prevState.address,
        { masterid: 0, address1: "", address2: "" }
      ]
    }));
  };
  removeAddress = (index) => {
    const address = [...this.state.address];
    address.splice(index, 1);
    this.setState((prevState) => ({ address }));
  };
  onFinish = (data) => {
    console.log(data);
    this.setState(data);
    AddressBookService.Add(data);
  };
  onFinishFailed = () => {};

  render() {
    return (
      <div
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280
        }}
      >
        {JSON.stringify(this.state)}
        <Form
          name="basic"
          layout="horizontal"
          // layout="vertical"
          // labelCol={{ span: 8 }}
          // wrapperCol={{ span: 16 }}
          initialValues={this.state}
          ref={this.formRef}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          {/* <Row gutter={20}>
            <Col xs={24} sm={24} md={17} lg={19} xl={20}>
              <Form.Item
                name={"name"}
                rules={[{ required: true, message: "This field is required" }]}
              >
                <Input placeholder="What needs to be done?" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={7} lg={5} xl={4}>
              <Button type="primary" htmlType="submit" block>
                Add todo
              </Button>
            </Col>
          </Row> */}

          <Row>
            <Col span={24}>
              <Form.Item name="id" style={{ display: "none" }}>
                <Input type="hidden" />
              </Form.Item>
              <Form.Item
                label="Title"
                rules={[{ required: true, message: "Please input title!" }]}
                name="title"
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={20}>
            <Col span={12}>
              <Form.Item label="First Name" name="firstname">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Last Name" name="lastname">
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Divider orientation="left" className="first">
            Add Phone Numbers
          </Divider>
          <Row gutter={20}>
            {this.state.phones.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <Col span={16}>
                    <Form.Item
                      name={["phones", index, "masterid"]}
                      style={{ display: "none" }}
                    >
                      <Input type="hidden" />
                    </Form.Item>
                    <Form.Item
                      label="Phone Number"
                      name={["phones", index, "number"]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  {this.state.phones.length > 1 ? (
                    <Col span={4}>
                      <Form.Item label="">
                        <Button
                          htmlType="button"
                          type="dashed"
                          shape="circle"
                          onClick={() => this.removePhone(index)}
                        >
                          -
                        </Button>
                      </Form.Item>
                    </Col>
                  ) : null}
                </React.Fragment>
              );
            })}
            <Col span={4}>
              <Button type="dashed" htmlType="button" onClick={this.addPhone}>
                Add +
              </Button>
            </Col>
          </Row>
          <Divider orientation="left" className="first">
            Add Address
          </Divider>
          <Row gutter={20}>
            {this.state.address.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <Col span={8}>
                    <Form.Item
                      name={["address", index, "masterid"]}
                      style={{ display: "none" }}
                    >
                      <Input type="hidden" />
                    </Form.Item>
                    <Form.Item
                      label="Address1"
                      name={["address", index, "address1"]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="Address2"
                      name={["address", index, "address2"]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  {this.state.address.length > 1 ? (
                    <Col span={4}>
                      <Form.Item>
                        <Button
                          htmlType="button"
                          type="dashed"
                          onClick={() => this.removeAddress(index)}
                        >
                          Remove -
                        </Button>
                      </Form.Item>
                    </Col>
                  ) : null}
                </React.Fragment>
              );
            })}
            <Col span={4}>
              <Button type="dashed" htmlType="button" onClick={this.addAddress}>
                Add +
              </Button>
            </Col>
          </Row>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
export default AddressbookNew;
