import React from 'react';

const DeviceInformation =(props) => {
  return (
      <div className="device-detail">
        <span>Device Id : {props.id} </span>
        <span>Device Name : {props.deviceName} </span>
        <span>Device Information : {props.deviceInfo} </span>
      </div>
  );
}

export default DeviceInformation;