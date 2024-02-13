import { Avatar, Button, Link, TextField } from "@mui/material";
import React, { useState } from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import "./styles.css";
import * as Yup from "yup";
import { Formik } from "formik";

const initialValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

// Define Yup validation schema for sign up
const registerValidationSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Required"),
});

// Define Yup validation schema for sign in
const logInValidationSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

const Auth = () => {
  const [isRegister, setIsRegister] = useState(false);
  const toggleRegister = () => setIsRegister(!isRegister);

  // Function to handle form submission
  const onSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);

    // Dispatch appropriate action based on sign up or sign in
    if (isRegister) {
      console.log("isRegister values is ", values);
      // dispatch(signUp(values, navigate));
    } else {
      console.log("isLogIn values is ", values);
      // dispatch(
      //   signIn({ email: values.email, password: values.password }, navigate)
      // );
    }
  };

  return (
    <div className="auth-container">
      <div className="image-container">
        <img src="./chat.png" alt="welcome-logo" className="welcome-logo" />
      </div>
      <div className="auth-box">
        <Avatar
          sx={{
            m: 1,
            bgcolor: "secondary.main",
            width: 100,
            height: 100,
          }}
        >
          <LockOutlinedIcon sx={{ fontSize: 48 }} />
        </Avatar>
        <Formik
          initialValues={initialValues}
          validationSchema={
            isRegister ? registerValidationSchema : logInValidationSchema
          }
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
              <form className="auth-form">
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.username && touched.username}
                  helperText={
                    errors.username && touched.username && errors.username
                  }
                />
                {isRegister && (
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="Email"
                    autoFocus
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.email && touched.email}
                    helperText={errors.email && touched.email && errors.email}
                  />
                )}
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.password && touched.password}
                  helperText={
                    errors.password && touched.password && errors.password
                  }
                />
                {isRegister && (
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="confirmPassword"
                    label="Confirm Password"
                    name="confirmPassword"
                    autoComplete="confirmPassword"
                    autoFocus
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.confirmPassword && touched.confirmPassword}
                    helperText={
                      errors.confirmPassword &&
                      touched.confirmPassword &&
                      errors.confirmPassword
                    }
                  />
                )}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleSubmit}
                >
                  {isRegister ? "Register" : "Log In"}
                </Button>
                <div className="bt-auth-link">
                  <Link onClick={toggleRegister} style={{ cursor: "pointer" }}>
                    {isRegister
                      ? "Already a user ? log In"
                      : "New User ? Register"}
                  </Link>
                </div>
              </form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default Auth;
