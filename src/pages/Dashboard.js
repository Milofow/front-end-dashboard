import React from "react";
import TopBar from "../components/TopBar";
import Profile from "../components/Profile";
import Lamp from "../components/Lamp";
import Connection from "../MQTT/Connection";

export function Dashboard() {
    return (
        <>
            <TopBar pageName = "Dashboard"/>
            <Profile />
            <Lamp lightId="10" />
            <Connection></Connection>
        </>
    );
}