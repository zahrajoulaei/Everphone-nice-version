/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
import React  from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { StringParam,  useQueryParam } from 'use-query-params';
import Header from './Header';
import DeviceInformation from './DeviceInformation';
import { devices } from './../data';
import close from '../assets/close.svg';
import logo from '../assets/logo.jpeg';

const DeviceInfo = () => {
  const [selectedDevice] = useQueryParam('selectedDevice-f', StringParam);
  const history = useHistory();
  const match = useRouteMatch();

  return (
    <div className="device-page container">
      <Header />
      <h3>Device Details : {selectedDevice}</h3>
      <div className="device">
        <button className="close-button" onClick={() => (history.push(`${match.path}`))}>
          <img className="close-icon" src={close} alt="close" />
        </button>

        <div className="device-part">
          {devices.map((device, index) => {
            if( selectedDevice == device.id) {
              return(
                <DeviceInformation 
                  key={index}
                  id={device.id} 
                  deviceName={device.deviceName}
                  deviceInfo={device.deviceInfo}
                />
              );
            } 
          })}
        </div>
        <div className="logo-footer"><img className="image" src={logo} alt="logo" /></div>
      </div>
    </div>
  );
}

export default DeviceInfo;