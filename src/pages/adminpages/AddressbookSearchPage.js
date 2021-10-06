import React from "react";
import { Button, Form, Input, Row, Col, Divider, Spin } from "antd";
import AddressBookService from "services/addressbookService";
class AddressbookSearchPage extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    search: "",
    typingTimeout: 0,
    result: [],
    loading: false
  };
  componentDidMount() {}
  getData = () => {
    debugger;
  };
  changeName = (event) => {
    const self = this;
    if (self.state.typingTimeout) {
      clearTimeout(self.state.typingTimeout);
    }

    self.setState({
      //  name: event.target.value,
      typingTimeout: setTimeout(function () {
        self.sendToParent(self.state.name);
      }, 5000)
    });
  };
  componentDidUpdate(prevProps) {
    if (this.props.match.match.params.id !== prevProps.match.match.params.id) {
      // this.getNewData();
    }
  }
  onFinish = (data) => {
    debugger;
    console.log(data);
    this.setState({ search: data, loading: true });
    AddressBookService.Search(data).then((res) => {
      debugger;
      this.setState({ result: res.data, loading: false });
    });
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
          <Row>
            <Col span={24}>
              <Form.Item
                label="Search"
                rules={[
                  { required: true, message: "Please input search text!" }
                ]}
                name="search"
              >
                <Input />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Col>
          </Row>

          <Divider orientation="left" className="first">
            Result
          </Divider>
          <Row gutter={20}>
            <Col span={24}>
              {this.state.loading ? (
                <div>
                  <Spin />
                </div>
              ) : (
                <div>{JSON.stringify(this.state.result)}</div>
              )}
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}
export default AddressbookSearchPage;
