import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import "./App.css";
import FormHandler from "./formHandler";
import { Row, Col, Container } from "react-bootstrap";

import PropTypes from "prop-types";

class Contact extends Component {
  render() {
    const style = {
      width: "100%",
      height: "200px",
      marginTop: "45px"
    };
    console.log(this.props);
    return (
      <div className="Contact" style={{ width: "100%" }}>
        <h1 className="text-center" style={{ marginTop: "45px" }}>
          Contact Us
        </h1>
        <Row>
          <Col
            xs={12}
            sm={4}
            md={4}
            className="ml-3 mr-3"
            style={{ width: "50%" }}
          >
            <FormHandler env={this.props.env} />
          </Col>
          <Col xs={12} sm={4} md={4}>
            <Row>
              <Col xs={12} md={12}>
                <Map
                  google={this.props.google}
                  zoom={10}
                  style={{ width: "100%", height: "auto" }}
                  height="200%"
                  width="200%"
                  initialCenter={{
                    lat: 47.615403,
                    lng: -122.32039
                  }}
                  style={style}
                >
                  <Marker
                    style={{ width: "100%" }}
                    onClick={this.onMarkerClick}
                    name={"Current location"}
                  />

                  {/* <InfoWindow onClose={this.onInfoWindowClose}>

 </InfoWindow> */}
                </Map>
              </Col>
            </Row>
            <Row style={{ marginTop: "18rem", width: "100%" }}>
              <Col xs={12} md={4} className="ml-2">
                <h1 className="blue text-center">Phone</h1>
                <p className="blue text-center">206.123.1234</p>
              </Col>
              <Col xs={12} sm={6} md={4}>
                <h1>Location</h1>
                <p>Unloop Studios</p>
                <p>900 East Pike Street</p>
                <p>Seattle, WA 98104</p>
              </Col>
              <Col className="mr-2" xs={12} md={4}>
                <h1 className="blue text-right">Email</h1>
                <p className="blue text-right">unloop@unloop.com </p>
              </Col>
            </Row>
          </Col>
        </Row>

        <div></div>
      </div>
    );
  }
}

Contact.propTypes = {
  env: PropTypes.object.isRequired
};

// export default Contact;

export default GoogleApiWrapper({
  apiKey: ""
})(Contact);
