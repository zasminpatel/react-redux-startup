import axios from "axios";
class MMasterService {
  Add = (id) => {
    debugger;
    const actionData = {
      method: "GET",
      url: "http://mergemypdf.somee.com/api/v1/addressbook/addressbook/" + id
    };
    return axios.get(actionData).then((result) => {
      debugger;
      console.log(result);
      return result.data;
    });
    // return data;
  };
  Get = (id) => {
    var retVals = {};
    if (id > 0) {
      retVals = {
        id: id,
        userid: 1,
        masterid: 2,
        masters: [
          { id: 1, title: "title1" },
          { id: 2, title: "title2" },
          { id: 3, title: "title3" }
        ],
        mname: "test name",
        mphone: "1234567890",
        mvehicalno: "gj13r1234",
        mpersons: 2,
        maddress: "none address",
        mnotes: "notes",
        mimage: "test.jpg"
      };
    } else {
      retVals = {
        id: 0,
        userid: 0,
        masterid: 0,
        masters: [
          { id: 1, title: "title1" },
          { id: 2, title: "title2" },
          { id: 3, title: "title3" }
        ],
        mname: "",
        mphone: "",
        mvehicalno: "",
        mpersons: 0,
        maddress: "",
        mnotes: "",
        mimage: ""
      };
    }
    return retVals;

    // const actionData = {
    //   method: "GET",
    //   url: "http://mergemypdf.somee.com/api/v1/addressbook/addressbook/" + id
    // };
    // // await axios.get(actionData).then((result) => {
    // //   console.log(result);
    // //   return result.data;
    // // });
    // axios
    //   .get("https://mergemypdf.somee.com/api/v1/addressbook/addressbook/" + id)
    //   .then((resp) => {
    //     console.log(resp.data);
    //     return resp.data;
    //   });
  };
  GetAll = () => {
    return axios.get("./addressbooks.json");
  };
  Search = (search) => {
    return [
      {
        id: 1,
        mname: "test name",
        mphone: "1234567890",
        mvehicalno: "gj13r1234",
        mpersons: 2,
        maddress: "none address",
        mnotes: "notes"
      },
      {
        id: 2,
        mname: "name2",
        mphone: "99088774456",
        mvehicalno: "gj13rc4578",
        mpersons: 1,
        maddress: "address for name2",
        mnotes: "non"
      }
    ];
    //return axios.get("https://jsonplaceholder.typicode.com/todos");
  };
}
export default new MMasterService();
