import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { useState } from "react";



export default function Device(props) {

    const [status, setStatus] = useState("Turn on");

    const changeStatus = () => {
        status === "Turn on"?
        setStatus("Turn off"):setStatus("Turn on")
    }

    const getStatus = (status) => {
      let text = "";
      status?  
      text = "On" : text = "Off"
      return text
    }

    const handleClick = () => {
        changeStatus();
    }

  return (
    <Card sx={{ minWidth: 100, maxWidth: 300}}>
      <CardContent>
        <Typography variant="h5" component="div" textAlign="center">
          {props.device.name}
        </Typography>
        <Typography variant="body2" textAlign="center" marginTop="5%">
          Current status: {getStatus(props.device.status)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => handleClick()} size="small" >{status}</Button>
      </CardActions>
    </Card>
  );
}


Device.propTypes = {
    device: PropTypes.object.isRequired,
  };