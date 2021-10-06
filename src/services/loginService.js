class LoginService {
  Login(data) {
    //Axios Post Action
    const user = {
      username: data.username,
      token: "a1adbc-12ad-123adsf-adfa32",
      remember: data.remember
    };
    console.log(data.username + " - " + data.remember);
    if (user.remember === true)
      localStorage.setItem("user", JSON.stringify(user));
    return user;
  }
}
export default new LoginService();
// import http from "../http-common";

// class TutorialDataService {
//   getAll() {
//     return http.get("/tutorials");
//   }

//   get(id) {
//     return http.get(`/tutorials/${id}`);
//   }

//   create(data) {
//     return http.post("/tutorials", data);
//   }

//   update(id, data) {
//     return http.put(`/tutorials/${id}`, data);
//   }

//   delete(id) {
//     return http.delete(`/tutorials/${id}`);
//   }

//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }

//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
// }

// export default new TutorialDataService();
