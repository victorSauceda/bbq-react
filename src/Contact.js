import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import "./App.css";
import FormHandler from "./formHandler";
import { Row, Col, Container } from "react-bootstrap";

import PropTypes from "prop-types";

class Contact extends Component {
  render() {
    const style = {
      marginLeft: ".5rem",
      marginRight: "5rem",

      width: "100%",
      height: "200px"
    };
    console.log(this.props);
    return (
      <div style={{ marginLeft: "1.5rem", marginRight: "1.5rem" }}>
        <Row>
          <Col>
            <h1 className="text-center" style={{ marginTop: "45px" }}>
              Contact Us
            </h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6} md={6}>
            <FormHandler env={this.props.env} />
          </Col>

          <Col xs={12} sm={6} md={6} style={{ marginTop: "20px" }}>
            {/* <Container fluid> */}
            <Row sm={12}>
              <Map
                google={this.props.google}
                zoom={10}
                initialCenter={{
                  lat: 47.615403,
                  lng: -122.32039
                }}
                style={style}
              >
                <Marker
                  style={{ width: "60%" }}
                  onClick={this.onMarkerClick}
                  name={"Current location"}
                />
              </Map>
            </Row>

            <Row style={{ marginTop: "250px" }}>
              <Col xs={12} sm={4} md={4}>
                <h1 className="text-center">Phone</h1>
                <p className="text-center">206.123.1234</p>
              </Col>
              <Col xs={12} sm={4} md={4}>
                <h1 className="text-center">Location</h1>
                <p className="text-center">Unloop Studios</p>
                <p className="text-center">900 East Pike Street</p>
                <p className="text-center">Seattle, WA 98104</p>
              </Col>
              <Col xs={12} sm={4} md={4}>
                <h1 className="text-center">Email</h1>
                <p className="text-center">unloop@unloop.com </p>
              </Col>
            </Row>
            {/* </Container> */}
          </Col>
        </Row>
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


  
