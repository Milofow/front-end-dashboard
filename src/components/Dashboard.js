import React from "react";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";
import Lamp from "./Lamp";

const Dashboard = () => {
  return (
    <>
      <div>Dashboard</div>;
      <LogoutButton />
      <Profile />
      <Lamp lightId="10" />
    </>
  );
};

export default Dashboard;
