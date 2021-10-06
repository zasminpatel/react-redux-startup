import React from "react";
import {
  Button,
  Form,
  Input,
  AutoComplete,
  Row,
  Col,
  Card,
  Divider,
  Select
} from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  MailOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined
} from "@ant-design/icons";
import "./DashboardPage.scss";
// http://bestjquery.com/tutorial/counter/demo159/
const gridStyle = { width: "100%" };
const bodyStyle = { padding: "0px" };
const { Meta } = Card;
const DashboardPage = (props) => {
  return (
    <>
      <h1>Welcome to Admin - Dashboard page.</h1>
      <div className="site-card-wrapper">
        <Row gutter={[8, 8]} className="dash-row">
          <Col span={6}>
            <Card
              bordered={false}
              hoverable={true}
              style={gridStyle}
              bodyStyle={bodyStyle}
              className="counter"
            >
              {/* <Card.Grid bordered={false}  > */}
              <h3>Web Designing</h3>
              <span className="counter-value">100</span>
              <div className="counter-icon">
                <i className="fa fa-globe"></i>
              </div>
              {/* </Card.Grid> */}
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Card.Grid style={gridStyle} className="counter">
                <h3>Web Designing</h3>
                <span className="counter-value">130</span>
                <div className="counter-icon">
                  <i className="fa fa-rocket"></i>
                </div>
              </Card.Grid>
            </Card>
          </Col>
          <Col span={6}>
            <Card bordered={true}>
              <Card.Grid
                bordered={false}
                style={gridStyle}
                className="counter blue"
              >
                <h3>Web Designing</h3>
                <span className="counter-value">140</span>
                <div className="counter-icon">
                  <i className="fa fa-users"></i>
                </div>
              </Card.Grid>
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              // style={{ width: 240 }}
              style={gridStyle}
              cover={
                <img
                  alt="example"
                  src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210727192049/CP_ad_icon.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
            {/* <Card bordered={true}>
              <Card.Grid style={gridStyle} className="counter pink">
                <h3>Web Designing</h3>
                <span className="counter-value">300</span>
                <div className="counter-icon">
                  <i className="fa fa-globe"></i>
                </div>
              </Card.Grid>
            </Card> */}
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={6}>
            <Card bordered={false} hoverable={true} bodyStyle={bodyStyle}>
              a
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Card.Grid style={gridStyle} className="counter">
                b
              </Card.Grid>
            </Card>
          </Col>
          <Col span={6}>
            <Card bordered={true}>c</Card>
          </Col>
          <Col span={6}>
            {" "}
            <Card bordered={true}>d</Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default DashboardPage;
