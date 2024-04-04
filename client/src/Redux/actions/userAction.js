// import { AUTH, LOG_OUT } from "./actionTypes";
import { fetchUsersApi, logInApi, registerApi } from "../api";
import { AUTH, FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS } from "./actionTypes";
import { showToast } from "./toastAction";

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

      dispatch(showToast(`Welcome back, ${data.name}!`, "success"));
      navigate("/app/welcome");
    } catch (error) {
      dispatch(showToast(error.response.data.message, "error"));
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

      dispatch(showToast(data.message, "success"));

      // Navigate to the desired page after successful sign-up
      navigate("/app/welcome");
    } catch (error) {
      // Handle errors by showing an error notification
      dispatch(showToast(error.response.data.message, "error"));
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
    dispatch(showToast(error.message, "error"));
  } finally {
  }
};
