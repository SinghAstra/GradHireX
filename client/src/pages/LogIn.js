import { Formik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { logInAction } from "../Redux/actions/userAction";
import { useDispatch, useSelector } from "react-redux";

const LogIn = () => {
  const isAuthenticating = useSelector((state) => state.loading.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialLogInValues = {
    username: "",
    password: "",
  };

  const logInValidationSchema = Yup.object().shape({
    username: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    dispatch(logInAction(values.username, values.password, navigate));
  };

  return (
    <div className="flex bg-black w-full h-screen font-mono">
      <div className="flex-1 flex items-center justify-center w-full h-screen flex-col">
        <div className="w-4/5 mb-6">
          <h1 className="text-xl font-medium text-violet-400">Welcome back</h1>
        </div>
        <Formik
          initialValues={initialLogInValues}
          validationSchema={logInValidationSchema}
          onSubmit={onSubmit}
        >
          {(props) => {
            const {
              values,
              touched,
              errors,
              handleChange,
              handleBlur,
              handleSubmit,
            } = props;
            return (
              <form
                className="w-4/5 flex flex-col gap-3"
                onSubmit={handleSubmit}
              >
                <div>
                  <input
                    className={`w-full h-10 bg-transparent text-white font-mono outline outline-0 focus:outline-0 border focus:border-2 text-sm px-3 py-2.5 rounded-[7px] focus:border-violet-400 ${
                      touched.username && errors.username
                        ? "border-red-400"
                        : ""
                    }`}
                    placeholder="Username"
                    type="text"
                    id="username"
                    autoComplete="off"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isAuthenticating}
                  />
                  <p className="ml-2 text-red-400">
                    {touched.username && errors.username}
                  </p>
                </div>
                <div>
                  <input
                    className={`w-full h-10 bg-transparent text-white font-mono outline outline-0 focus:outline-0 border focus:border-2 text-sm px-3 py-2.5 rounded-[7px] focus:border-violet-400 ${
                      touched.password && errors.password
                        ? "border-red-400"
                        : ""
                    }`}
                    placeholder="Password"
                    type="password"
                    id="password"
                    autoComplete="off"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isAuthenticating}
                  />
                  <p className="ml-2 text-red-400">
                    {touched.password && errors.password}
                  </p>
                </div>
                <button
                  className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 border border-violet-700 rounded w-full mt-3 flex items-center justify-center"
                  type="submit"
                  disabled={isAuthenticating}
                >
                  {isAuthenticating ? "Please Wait " : "Log In "}
                  {isAuthenticating && (
                    <>
                      &nbsp;
                      <span className="loading loading-dots loading-md"></span>
                    </>
                  )}
                </button>
              </form>
            );
          }}
        </Formik>
        <div className="w-4/5 text-right mt-3">
          <Link to="/sign-up">
            <p className="text-base hover:text-violet-400 cursor-pointer hover:underline text-white">
              New User ? Sign Up
            </p>
          </Link>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={"/images/log-in.svg"} alt="Log In" />
      </div>
    </div>
  );
};

export default LogIn;
