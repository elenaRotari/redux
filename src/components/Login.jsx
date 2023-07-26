import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";
import "./login.scss";

const Login = () => {
  const dispatch = useDispatch();
  return (
    <div className="buttons">
      <button
        onClick={() => {
          dispatch(login({ name: "ella", email: "ele@itref.com ", age: 38 }));
        }}
      >
        LogIn
      </button>
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        LogOut
      </button>
    </div>
  );
};

export default Login;
