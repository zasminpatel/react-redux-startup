import React from "react";
import {
  Button,
  Form,
  Input,
  AutoComplete,
  Row,
  Col,
  Divider,
  Select
} from "antd";
import MMasterService from "services/mmasterService";
import mimage from "images/mimage.png";
import "./AddressbookPage.css";
//https://codesandbox.io/s/jnpjpj2p55
//Camera
//https://bearnithi.com/2020/03/20/take-a-selfie-with-react-access-web-camera-js/
//https://github.com/samdutton/simpl/blob/gh-pages/getusermedia/sources/js/main.js
const { Option } = Select;
const memberList = (masters) => {
  return masters.map((master) => {
    return (
      <Option key={master.id} value={master.id}>
        {master.title}
      </Option>
    );
  });
};
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 }
};
class MMasterPage extends React.Component {
  constructor(props) {
    super(props);
  }
  formRef = React.createRef();
  videoEle = React.createRef();
  canvasEle = React.createRef();
  imageEle = React.createRef();
  state = {
    formData: {
      id: 0,
      userid: 0,
      masterid: "",
      mname: "",
      mphone: "",
      mvehicalno: "",
      mpersons: "",
      maddress: "",
      mnotes: "",
      mimage: ""
    },
    masters: [{}],
    typingTimeout: 0,
    searchoptions: [],
    result: [],
    loading: false
  };
  startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true
      });

      this.videoEle.current.srcObject = stream;
    } catch (err) {
      console.log(err);
    }
  };
  stopCam = () => {
    const stream = this.videoEle.current.srcObject;
    const tracks = stream.getTracks();

    tracks.forEach((track) => {
      track.stop();
    });
  };
  takeSelfie = async () => {
    // Get the exact size of the video element.
    var width = this.videoEle.current.videoWidth;
    var height = this.videoEle.current.videoHeight;
    if (width == 0 || height == 0) {
      width = 100;
      height = 100;
    }
    // get the context object of hidden canvas
    const ctx = this.canvasEle.current.getContext("2d");

    // Set the canvas to the same dimensions as the video.
    this.canvasEle.current.width = width;
    this.canvasEle.current.height = height;

    // Draw the current frame from the video on the canvas.

    ctx.drawImage(this.videoEle.current, 0, 0, width, height);

    // Get an image dataURL from the canvas.
    const imageDataURL = this.canvasEle.current.toDataURL("image/jpg");

    // Set the dataURL as source of an image element, showing the captured photo.

    this.setState({
      formData: {
        mimage: imageDataURL
      }
    });
    //this.stopCam();
  };
  backToCam = () => {
    this.setState(
      {
        formData: {
          mimage: ""
        }
      },
      () => {
        this.startCamera();
      }
    );
  };
  componentDidMount() {
    this.startCamera();
    this.getNewData();
  }
  setStateToForm = () => {
    const { formData } = this.state;
    this.formRef.current.setFieldsValue({
      id: formData.id,
      userid: formData.userid,
      // masterid: formData.masterid,
      mname: formData.mname,
      mphone: formData.mphone,
      mvehicalno: formData.mvehicalno,
      mpersons: formData.mpersons,
      maddress: formData.maddress,
      mnotes: formData.mnotes,
      mimage: formData.mimage
    });
  };
  getNewData = () => {
    this.setState({ loading: true });
    const id = this.props.match.match.params.id;
    const data = MMasterService.Get(id);
    this.setState(
      {
        formData: {
          id: data.id,
          userid: data.userid,
          // masterid: data.masterid,
          mname: data.mname,
          mphone: data.mphone,
          mvehicalno: data.mvehicalno,
          mpersons: data.mpersons,
          maddress: data.maddress,
          mnotes: data.mnotes,
          mimage: data.mimage
        },
        masters: data.masters,
        loading: false
      },
      () => {
        this.setStateToForm();
      }
    );
  };
  componentDidUpdate(prevProps) {
    if (this.props.match.match.params.id !== prevProps.match.match.params.id) {
      this.getNewData();
    }
  }
  // searchData = (event) => {
  //   const self = this;
  //   if (self.state.typingTimeout) {
  //     clearTimeout(self.state.typingTimeout);
  //   }
  //   self.setState({
  //     typingTimeout: setTimeout(function () {
  //       const result = MMasterService.Search(event.target.value);
  //       if (result) {
  //         console.log(result);
  //       }
  //     }, 5000)
  //   });
  // };
  onSelect = (value) => {
    debugger;
    const filter = this.state.result.filter((r) => r.mphone === value)[0];
    this.setState(
      {
        formData: {
          id: filter.id,
          userid: filter.userid,
          // masterid: filter.masterid,
          mname: filter.mname,
          mphone: filter.mphone,
          mvehicalno: filter.mvehicalno,
          mpersons: filter.mpersons,
          maddress: filter.maddress,
          mnotes: filter.mnotes,
          mimage: ""
        }
      },
      () => {
        this.setStateToForm();
      }
    );
  };
  getRandomInt(max, min = 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
  }
  getDatabyPhone = (value) => {
    return MMasterService.Search(value);
  };
  searchResult = (query) => {
    const result = this.getDatabyPhone(query);
    const rCount = result.length;
    this.setState({ result });
    return result.map((d, idx) => {
      return {
        value: d.mphone,
        label: (
          <div
            key={idx}
            style={{
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <span>{d.mphone + " " + d.mname}</span>
            <span>{rCount} results</span>
          </div>
        )
      };
    });
  };
  handleSearch = (value) => {
    const self = this;
    if (self.state.typingTimeout) {
      clearTimeout(self.state.typingTimeout);
    }
    self.setState({
      typingTimeout: setTimeout(function () {
        var searchoptions = self.searchResult(value);
        self.setState({ searchoptions });
      }, 5000)
    });
  };
  onFinish = (data) => {
    debugger;
    console.log(data);
    this.setState({ formData: data });
    // MMasterService.Add(data);

    //this.props.match.history.push("/admin/mmasters");
    // this.props.history.push("/admin/mmasters");
    // let history = useHistory();
    // history.push("/admin/mmasters");
  };
  onFinishFailed = (data) => {
    debugger;
  };

  render() {
    const { formData } = this.state;
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
          initialValues={formData}
          ref={this.formRef}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Row>
            <Col span={24}>
              <Form.Item name="id" style={{ display: "none" }}>
                <Input type="hidden" />
              </Form.Item>
              <Form.Item
                name="masterid"
                label="Member"
                rules={[{ required: true }]}
                //placeholder="Select a option and change input text above"
              >
                <Select
                  placeholder="Select a member"
                  showSearch
                  allowClear
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                  filterSort={(optionA, optionB) =>
                    optionA.children
                      .toLowerCase()
                      .localeCompare(optionB.children.toLowerCase())
                  }
                >
                  {memberList(this.state.masters)}
                  {/* <Option value="0">Please Select</Option> */}
                  {/* {this.state.masters.map((master) => {
                    return (
                      <Option key={master.id} value={master.id}>
                        {master.title}
                      </Option>
                    );
                  })} */}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Divider orientation="left" className="first">
            Details
          </Divider>
          <Row gutter={10}>
            <Col span={12}>
              {/* <Row gutter={20}>
                <Col span={24}>
                  <Form.Item
                    label="Phone"
                    name="mphone"
                    onChange={this.searchData}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row> */}
              <Row gutter={20}>
                <Col span={24} labelCol={4} wrapperCol={12}>
                  <Form.Item label="Phone" name="mphone">
                    <AutoComplete
                      // dropdownMatchSelectWidth={252}
                      // style={{
                      //   width: 300
                      // }}
                      options={this.state.searchoptions}
                      onSelect={this.onSelect}
                      onSearch={this.handleSearch}
                      name="mphone"
                    >
                      <Input.Search
                        placeholder="please enter phone"
                        // enterButton
                      />
                    </AutoComplete>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={20}>
                <Col span={24} labelCol={4} wrapperCol={12}>
                  <Form.Item
                    label="Name"
                    name="mname"
                    placeholder="please enter name"
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={20}>
                <Col span={24} labelCol={4} wrapperCol={12}>
                  <Form.Item
                    label="Vehical No."
                    name="mvehicalno"
                    placeholder="please enter vehical no."
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={20}>
                <Col span={24} labelCol={4} wrapperCol={12}>
                  <Form.Item
                    label="Persons"
                    name="mpersons"
                    placeholder="please enter no. of persons"
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={20}>
                <Col span={24} labelCol={4} wrapperCol={12}>
                  <Form.Item
                    label="Address"
                    name="maddress"
                    placeholder="please enter address"
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={20}>
                <Col span={24} labelCol={4} wrapperCol={12}>
                  <Form.Item label="Notes" name="mnotes">
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={20}>
                <Col span={24} labelCol={4} wrapperCol={12}>
                  <Form.Item label="Image" name="mimage">
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
            <Col span={12}>
              <Row gutter={20}>
                <Col span={12}>
                  {/* <video ref={this.videoEle}></video>
              <canvas ref={this.canvasEle} style={{ display: "none" }}></canvas>
              <img ref={this.imageEle} src={this.state.mimage}></img> */}
                  <video
                    width="100%"
                    height="100%"
                    className="video-player"
                    autoPlay={true}
                    ref={this.videoEle}
                  ></video>
                  <button
                    type="button"
                    className="btn capture-btn"
                    onClick={this.takeSelfie}
                  >
                    <i class="fa fa-camera" aria-hidden="true"></i>Take
                  </button>

                  <canvas
                    ref={this.canvasEle}
                    style={{ display: "none" }}
                  ></canvas>
                  <div className="preview">
                    <img
                      alt="img"
                      className="preview-img"
                      src={this.state.mimage}
                      ref={this.imageEle}
                      width={100}
                      height={100}
                    />
                    <img
                      alt="d"
                      width={50}
                      height={50}
                      src="data:image/png;base64,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"
                    />

                    {/* <img alt="abc" src={mimage} width={100} height={100} /> */}
                    <div className="btn-container">
                      <button
                        type="button"
                        className="btn back-btn"
                        onClick={this.backToCam}
                      >
                        <i class="fa fa-chevron-left" aria-hidden="true"></i>
                        Back
                      </button>
                      <a
                        href={this.state.mimage}
                        download="selfie.png"
                        className="btn download-btn"
                      >
                        <i class="fa fa-download" aria-hidden="true"></i>
                      </a>
                    </div>
                  </div>
                </Col>
              </Row>
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
export default MMasterPage;
