// import { AUTH, LOG_OUT } from "./actionTypes";
import { fetchUserInfo, fetchUsersApi, logInApi, registerApi } from "../api";
import {
  AUTH,
  END_AUTHENTICATING,
  FETCH_USERS_FAILURE,
  FETCH_USERS_SUCCESS,
  LOG_OUT,
  START_AUTHENTICATING,
} from "./actionTypes";
import { showToast } from "./toastAction";

// Action creator for user sign-in
export const logInAction = (name, password, navigate) => {
  return async function (dispatch) {
    try {
      dispatch({ type: START_AUTHENTICATING });
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
      dispatch({ type: END_AUTHENTICATING });
    }
  };
};

// Action creator for user sign-up
export const registerAction = (name, email, password, navigate) => {
  return async function (dispatch) {
    try {
      dispatch({ type: START_AUTHENTICATING });
      console.log("Register Info in registerAction ", {
        name,
        email,
        password,
      });
      const { data } = await registerApi(name, email, password);
      console.log("data --registerAction ", data);

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
      console.log("error is ", error);
      // Handle errors by showing an error notification
      dispatch(showToast(error.response.data.message, "error"));
    } finally {
      dispatch({ type: END_AUTHENTICATING });
    }
  };
};

export const logOutAction = () => {
  return async function (dispatch) {
    try {
      console.log("Log Out Action");
      dispatch({ type: LOG_OUT });
    } catch (error) {
      dispatch(showToast(error.response.data.message, "error"));
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

export const fetchUserInfoAction = () => async (dispatch) => {
  try {
    dispatch({ type: START_AUTHENTICATING });
    const { data } = await fetchUserInfo();
    console.log("data --fetchUserInfo is ", data);
    dispatch({
      type: AUTH,
      payload: {
        _id: data._id,
        username: data.name,
        email: data.email,
        token: data.token,
      },
    });
  } catch (error) {
    dispatch(showToast(error.message, "error"));
  } finally {
    dispatch({ type: END_AUTHENTICATING });
  }
};
