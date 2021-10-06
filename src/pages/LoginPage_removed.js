//https:github.com/bezkoder/react-redux-axios-crud/blob/master/src/components/add-tutorial.component.js

import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Row, Col, Card, Skeleton, Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { login } from "../actions/loginAction";

import "antd/dist/antd.css";
import { Link } from "react-router-dom";
const LoginPage = (props) => {
  const [form] = Form.useForm();
  const [forceUpdate, setForceUpdate] = useState({}); // To disable submit button at the beginning.
  useEffect(() => {
    setForceUpdate({});
  }, []);

  const onFinish = (values) => {
    console.log("Finish:", values.password);
    this.props
      .login({ username: values.username, password: values.password })
      .then((data) => {
        // this.setState({
        //   id: data.id,
        //   title: data.title,
        //   description: data.description,
        //   published: data.published,

        //   submitted: true,
        // });
        debugger;
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <Row
        type="flex"
        justify="center"
        align="middle"
        style={{ minHeight: "100vh" }}
      >
        <Col>
          <Card>
            <Link to={"/counter"}>Counter</Link>
            <Form
              form={form}
              name="horizontal_login"
              layout="inline"
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!"
                  }
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item
                name="password"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please input your password!"
                  }
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item shouldUpdate>
                {() => (
                  <Button
                    type="primary"
                    htmlType="submit"
                    disabled={
                      !form.isFieldsTouched(true) ||
                      !!form
                        .getFieldsError()
                        .filter(({ errors }) => errors.length).length
                    }
                  >
                    Log in
                  </Button>
                )}
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    login: () => dispatch(login())
  };
};
export default connect(null, mapDispatchToProps)(LoginPage);
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
