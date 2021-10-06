import axios from "axios";
const login = (data) => {
  debugger;
  const user = {
    username: data.username,
    token: "a1adbc-12ad-123adsf-adfa32",
    remember: data.remember
  };
  return axios
    .get("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
      //return response.data;
      return data;
    });
  // return user;
};

const logout = () => {
  localStorage.removeItem("user");
};

// const loginAxios = (logindata) => {
//   debugger;
//   console.log(logindata);
//   const headers = {
//     "Access-Control-Allow-Origin": "*"
//   };
//   return axios
//     .post(API_URL + "authenticate", logindata, { headers })
//     .then((response) => {
//       localStorage.setItem("user", JSON.stringify(response.data));
//       // if (logindata.remember) {
//       // localStorage.setItem("user", JSON.stringify(response.data));
//       // }
//       // else{
//       // sessionStorage.setItem("user", JSON.stringify(response.data));
//       // }
//       return response.data;
//     });
// };

export default { login, logout };
