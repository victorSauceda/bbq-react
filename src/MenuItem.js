import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Card,
  ListGroup,
  Image,
  Grid,
  Col,
  Row,
  Form
} from "react-bootstrap";

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    this.setState({
      quantity: event.target.value
    });
  };

  render() {
    const style = {
      listStyleType: "none"
    };
    const marging = {
      marginBottom: "15px",
      height: "40rem"
    };
    const { item } = this.props;
    return (
      <Col xs={12} sm={6} md={4}>
        <Card className="bg-dark text-white" style={marging}>
          <Card.Body>
            <Card.Header style={{ height: "6rem" }} className="text-center">
              {item.name}
            </Card.Header>

            <Card.Img
              variant="top"
              src={item.imgSrc}
              alt={item.alt}
              style={{ height: "150px" }}
            />
            <p className="text-center">{item.description}</p>
            <ul style={{ listStyleType: "none" }}>
              <li className="text-center">Price:${item.price}</li>
              {/* <li className='col-2'>Calories: {item.calories}</li> */}
            </ul>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label className="text-center">Quantity</Form.Label>
              <Form.Control
                as="select"
                value={this.state.quantity}
                onChange={this.handleChange}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
            {/* <select className='text-center' value={this.state.quantity} onChange={this.handleChange}>
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='3'>3</option>
                                    <option value='4'>4</option>
                                    <option value='5'>5</option>
                                    <option value='6'>6</option>
                                    <option value='7'>7</option>
                                    <option value='8'>8</option>
                                    <option value='9'>9</option>
                                    <option value='10'>10</option>

                                </select> */}

            <Button
              variant="secondary"
              size="lg"
              block
              onClick={() => this.props.addToCart(item, this.state.quantity)}
            >
              Add to cart
            </Button>
            <Button
              variant="secondary"
              size="lg"
              block
              onClick={() =>
                this.props.removingCartItem(item, this.state.quantity)
              }
            >
              remove from cart
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
export default MenuItem;
