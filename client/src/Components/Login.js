import { Avatar, Button, TextField, Typography } from "@mui/material";
import React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import "./styles.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="image-container">
        <img src="./chat.png" alt="welcome-logo" className="welcome-logo" />
      </div>
      <div className="login-box">
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
        <form className="login-form">
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="Username"
            autoComplete="username"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Log In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
