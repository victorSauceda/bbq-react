
import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import './App.css';
import FormHandler from './formHandler';

import PropTypes from 'prop-types';

class Contact extends Component {

  render() {
    const style = {
      width: '80%',
      height: '80%'
    }
    console.log(this.props)
    return (
      <div className="Contact">

        <FormHandler env={this.props.env} />
       
        <Map google={this.props.google} zoom={10} initialCenter={{
             lat:47.615403,
          lng:-122.320390
        }} style={style}>
 
 <Marker onClick={this.onMarkerClick}
         name={'Current location'} />

 {/* <InfoWindow onClose={this.onInfoWindowClose}>

 </InfoWindow> */}
</Map>
      </div>
    );
  }
}

Contact.propTypes = {
  env: PropTypes.object.isRequired
};

// export default Contact;

export default GoogleApiWrapper({
   apiKey: "AIzaSyAnNk5ODJFd9XMSH9_3kIwh1RlqVoWXlXY"
})(Contact)