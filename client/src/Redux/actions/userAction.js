// import { AUTH, LOG_OUT } from "./actionTypes";
import { fetchUsersApi, logInApi, registerApi } from "../API";
import {
  AUTH,
  END_LOADING,
  FETCH_USERS_FAILURE,
  FETCH_USERS_SUCCESS,
  START_LOADING,
} from "./actionTypes";
import { showNotification } from "./notificationAction";
// import { showNotification } from "./notifications";

// Action creator for user sign-in
export const logIn = (name, password, navigate) => {
  return async function (dispatch) {
    try {
      const { data } = await logInApi(name, password);

      dispatch({
        type: AUTH,
        payload: {
          _id: data.id,
          username: data.name,
          email: data.email,
          token: data.token,
        },
      });

      dispatch(showNotification(`Welcome back, ${data.name}!`, "success"));
      navigate("/app/welcome");
    } catch (error) {
      dispatch(showNotification(error.response.data.message, "error"));
    } finally {
    }
  };
};

// Action creator for user sign-up
export const register = (name, email, password, navigate) => {
  return async function (dispatch) {
    try {
      const { data } = await registerApi(name, email, password);

      dispatch({
        type: AUTH,
        payload: {
          _id: data.id,
          username: data.name,
          email: data.email,
          token: data.token,
        },
      });

      dispatch(showNotification(data.message, "success"));

      // Navigate to the desired page after successful sign-up
      navigate("/app/welcome");
    } catch (error) {
      // Handle errors by showing an error notification
      dispatch(showNotification(error.response.data.message, "error"));
    } finally {
    }
  };
};

export const fetchUsers = (searchQuery) => async (dispatch) => {
  try {
    const { data } = await fetchUsersApi(searchQuery);
    dispatch({ type: FETCH_USERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_USERS_FAILURE });
    dispatch(showNotification(error.message, "error"));
  } finally {
  }
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
