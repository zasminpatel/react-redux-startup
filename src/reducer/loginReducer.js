let user = JSON.parse(localStorage.getItem("user"));
const initialState = user ? { loggedin: true, user } : {};
// const initialState = {};
const loginReducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log(JSON.stringify(initialState));
  switch (type) {
    case "LOGIN1":
      return state.concat([payload]);
    case "LOGIN":
      return { loggedin: true, user: payload };
    case "LOGIN_SUCCESS":
      return { loggedin: true, user: payload };
    default:
      return state;
  }
};
export default loginReducer;
