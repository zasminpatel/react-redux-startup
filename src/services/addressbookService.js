import axios from "axios";
class AddressBookService {
  Add = (id) => {
    const actionData = {
      // method: "POST",
      // data: {
      //   userId: 1,
      //   title: "test title",
      //   body: "test body"
      // },
      //url: "https://jsonplaceholder.typicode.com/posts"
      method: "GET",
      url: "http://mergemypdf.somee.com/api/v1/addressbook/addressbook/" + id
    };
    return axios.get(actionData).then((result) => {
      return result.data;
    });
    // return data;
  };
  Get = async (id) => {
    const actionData = {
      method: "GET",
      url: "http://mergemypdf.somee.com/api/v1/addressbook/addressbook/" + id
    };
    // await axios.get(actionData).then((result) => {
    //   console.log(result);
    //   return result.data;
    // });
    axios
      .get("https://mergemypdf.somee.com/api/v1/addressbook/addressbook/" + id)
      .then((resp) => {
        console.log(resp.data);
        return resp.data;
      });
  };
  GetAll = () => {
    return axios.get("./addressbooks.json");
  };
  Search = (search) => {
    return axios.get("https://jsonplaceholder.typicode.com/todos");
  };
}
export default new AddressBookService();
