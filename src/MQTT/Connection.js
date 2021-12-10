import { useState } from 'react';

const Connection = (topic) => {
  const [status, setStatus] = useState("nothing")
  const [message, setMessage] = useState();
  var mqtt = require('mqtt')
  var client  = mqtt.connect('ws://localhost:1883')
  
  const handleChange = (e) => {
    setMessage(e.target.value);
  }

  const pubMes = () => {
    client.publish('actuators/lights', message);
  }

  client.on('connect', () => {
    setStatus("Connected");
    client.subscribe('actuators/lights', function (err) {
    })

  })
  
  client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString())
    client.end()
  })
  
  return (
    <>
    <p>MQTT Status: {status}</p>
    <input onChange={handleChange}></input>
    <button onClick={pubMes}>Publish!</button>
    </>
  )
}

export default Connection;