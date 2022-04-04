const initialstate = {
  isLogin: false,
};
const LoginOut = (state = initialstate, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        isLogin: true,
      };
    case "LOGOUT":
      return {
        isLogin: false,
      };
    default:
      return state;
  }
};
export default LoginOut;
