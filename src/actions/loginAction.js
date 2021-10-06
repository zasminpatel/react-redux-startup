import LoginService from "../services/loginService";
import LoginServiceNew from "../services/loginServiceFn";

export function loginAction(logindata) {
  const res = LoginService.Login(logindata);
  return {
    type: "LOGIN",
    payload: res
  };
}
export const loginActionNew = (logindata) => (dispatch) => {
  debugger;
  return LoginServiceNew.login(logindata).then(
    (data) => {
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: { user: data }
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: "LOGIN_FAIL"
      });

      dispatch({
        type: "SET_MESSAGE",
        payload: message
      });

      return Promise.reject();
    }
  );
};
export const logout = () => (dispatch) => {
  LoginService.logout();
  dispatch({
    type: "LOGOUT"
  });
};
