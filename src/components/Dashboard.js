import React from "react";
import LogoutButton from "./LogoutButton";
import axios from "axios";
import { useState } from "react";
import Device from "./Device";
import { useEffect } from "react";

const Dashboard = () => {

  const apiUrl = "http://localhost:9096/api"
  const [devices, setDevices] = useState(null);

  const fetchDevices = () => {
    axios
      .get(`${apiUrl}/devices`)
      .then(function (response) {
        setDevices(response.data);
      })
      .catch(function (error) {});
  };

  useEffect(() => {
    if(devices == null) {
      fetchDevices();
    } 
  });

  return (
    <>
      <div>
        <h1>Dashboard</h1>
      </div>
      <LogoutButton />
      <div>
      { devices != null? 
        devices.map((device) => {
          return (<div key={device.id} style={{display:"inline-block", margin:"0 20px"}}>
                    <Device device={device}/>
                  </div>
        )})
        :
        <div>No devices found</div>
        
      }
      </div>
    </>
  );
};

export default Dashboard;
