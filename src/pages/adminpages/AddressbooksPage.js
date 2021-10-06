import React from "react";
import { Table } from "antd";
// import reqwest from "reqwest";
import axios from "axios";
import AddressBookService from "services/addressbookService";
import { NavLink } from "react-router-dom";
const columns = [
  {
    title: "Id",
    dataIndex: "id",
    sorter: true,
    width: "5%"
  },
  {
    title: "Title",
    dataIndex: "title",
    sorter: true,
    // render: (name) => `${name.first} ${name.last}`,
    width: "20%"
  }
  // {
  //   title: "Name",
  //   dataIndex: "name",
  //   render: (name) => `${name.firstname} ${name.lastname}`,
  //   // dataIndex: "gender",
  //   // filters: [
  //   //   { text: "Male", value: "male" },
  //   //   { text: "Female", value: "female" }
  //   // ],
  //   width: "20%"
  // }
];

const getRandomuserParams = (params) => ({
  results: params.pagination.pageSize,
  page: params.pagination.current,
  ...params
});
class AddressbooksPage extends React.Component {
  state = {
    data: [],
    pagination: {
      current: 1,
      pageSize: 10
    },
    loading: false
  };

  componentDidMount() {
    const { pagination } = this.state;
    this.setState({ loading: true });
    this.fetch({ pagination });
    // axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
    //   debugger;
    //   this.setState({ data: res.data, loading: false });
    // });

    // AddressBookService.GetAll().then((res) => {
    //   debugger;
    //   this.setState((prevState) => ({
    //     data: res.data
    //   }));
    // });
  }

  handleTableChange = (pagination, filters, sorter) => {
    this.fetch({
      sortField: sorter.field,
      sortOrder: sorter.order,
      pagination,
      ...filters
    });
  };

  fetch = (params = {}) => {
    this.setState({ loading: true });
    axios({
      // url: "https://randomuser.me/api",
      url: "https://jsonplaceholder.typicode.com/posts",
      method: "get",
      type: "json",
      data: getRandomuserParams(params)
    }).then((data) => {
      debugger;
      console.log(data);
      this.setState({
        loading: false,
        // data: data.results,
        data: data.data,
        pagination: {
          ...params.pagination,
          total: 100
          // 100 is mock data, you should read it from server
          // total: data.totalCount,
        }
      });
    });
  };

  render() {
    const { data, pagination, loading } = this.state;
    return (
      <>
        <NavLink to={"/admin/addressbook"}>Add New</NavLink>
        <Table
          columns={columns}
          rowKey={(record) => record.id}
          dataSource={data}
          pagination={pagination}
          loading={loading}
          onChange={this.handleTableChange}
        />
      </>
    );
  }
}

// const AddressbooksPage = () => {
//   return <h1>Welcome to Admin - Address book.</h1>;
// };

export default AddressbooksPage;
