import { useLoaderData } from "react-router-dom";
import "./App.scss";

import React from "react";
import Profile from "./components/Profile";
import Login from "./components/Login";

function App() {
  const data = useLoaderData();

  return (
    <div>
      <Profile />
      <Login />
    </div>
  );
}

export default App;

export const loader = async () => {
  //get users from api
  const user = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await user.json();
  //get comments from api
  const comment = await fetch("https://jsonplaceholder.typicode.com/comments");
  const comments = await comment.json();
  return { users, comments };
};
