// import { AUTH, LOG_OUT } from "./actionTypes";
import { logInApi, registerApi } from "../API";
import { AUTH } from "./actionTypes";
// import { showNotification } from "./notifications";

// Action creator for user sign-in
export const logIn = (name, password, navigate) => {
  return async function (dispatch) {
    try {
      // Call the sign-in API
      const { data } = await logInApi(name, password);

      console.log("data --logIn is ", data);
      dispatch({
        type: AUTH,
        payload: { username: data.name, email: data.email, token: data.token },
      });

      // Navigate to the desired page after successful sign-in
      navigate("/app/welcome");
    } catch (error) {
      // Handle errors by showing an error notification
      //   dispatch(showNotification(error.response.data.message, "error"));
    }
  };
};

// Action creator for user sign-up
export const register = (name, email, password, navigate) => {
  return async function (dispatch) {
    try {
      // Call the sign-up API
      const { data } = await registerApi(name, email, password);

      console.log("data --register is ", data);

      dispatch({
        type: AUTH,
        payload: { username: data.name, email: data.email, token: data.token },
      });
      // Navigate to the desired page after successful sign-up
      navigate("/app/welcome");
    } catch (error) {
      console.log("error is ", error);
      console.log(
        "error.response.data.message is ",
        error.response.data.message
      );
      // Handle errors by showing an error notification
      //   dispatch(showNotification(error.response.data.message, "error"));
    }
  };
};

// // Action creator for user log-out
// export const logOut = (setUser) => {
//   return async function (dispatch) {
//     try {
//       // Clear local storage, dispatch LOG_OUT action, and reset user state
//       localStorage.clear();
//       dispatch({ type: LOG_OUT });
//       setUser(null);
//     } catch (error) {
//       // Log any errors that occur during log-out
//       console.log("error in logOutUser is ", error);
//     }
//   };
// };
