import React from "react";
import { useSelector } from "react-redux";
import "./profile.scss";

const Profile = () => {
  const user = useSelector((state) => state.user.value);
  return (
    <div className="user">
      <h1>Profile Page </h1>
      <h3>Name: {user.name}</h3>
      <h3>Email: {user.email}</h3>
      <h3>Age: {user.age}</h3>
    </div>
  );
};

export default Profile;
