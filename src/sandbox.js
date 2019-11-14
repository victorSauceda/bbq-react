import React from "react";
import { ConsoleLogger } from "@aws-amplify/core";
import { API } from "aws-amplify";
import { async } from "q";
import { Form, Button } from "react-bootstrap";

export default class Sandbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      imgSrc: "",
      alt: "",
      price: "",
      inStock: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = async event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();

    let body = {
      name: this.state.name,
      description: this.state.description,
      imgSrc: this.state.imgSrc,
      alt: this.state.alt,
      price: this.state.price,
      inStock: this.state.inStock
    };

    console.log(body);

    try {
      const response = await API.post("rest-api", "/notes", { body });
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const style = {
      marginTop: "45px"
    };
    return (
      <Form
        className="feedback-form"
        style={style}
        onSubmit={this.handleSubmit}
      >
        <h1 className="text-center">Add items to the Menu</h1>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="name@example.com"
            name="name"
            onChange={this.handleChange}
            required
            value={this.state.name}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="please add a description of the item"
            name="description"
            onChange={this.handleChange}
            required
            value={this.state.description}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Image Source</Form.Label>
          <Form.Control
            type="text"
            placeholder="path for the image to be displayed"
            name="imgSrc"
            onChange={this.handleChange}
            required
            value={this.state.imgSrc}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Alternate Text</Form.Label>
          <Form.Control
            type="text"
            placeholder="alternate text to display in for screen readers"
            name="alt"
            onChange={this.handleChange}
            required
            value={this.state.alt}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            placeholder="How much are you going to sell this product for"
            name="price"
            onChange={this.handleChange}
            required
            value={this.state.price}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>In Stock</Form.Label>
          <Form.Control
            type="text"
            placeholder="How many items are in stock"
            name="inStock"
            onChange={this.handleChange}
            required
            value={this.state.inStock}
          />
        </Form.Group>
        <Button type="submit" block>
          Submit
        </Button>
      </Form>

      //   <input
      //     type="text"
      //     className="text-input"
      //     id="description"
      //     name="description"
      //     onChange={this.handleChange}
      //     placeholder="Enter a description"
      //     required
      //     value={this.state.description}
      //   />
      //   <input
      //     type="text"
      //     className="text-input"
      //     id="imgSrc"
      //     name="imgSrc"
      //     onChange={this.handleChange}
      //     placeholder="Enter the image source"
      //     required
      //     value={this.state.imgSrc}
      //   />
      //   <input
      //     type="text"
      //     className="text-input"
      //     id="alt"
      //     name="alt"
      //     onChange={this.handleChange}
      //     placeholder="Enter the alternative text"
      //     required
      //     value={this.state.alt}
      //   />
      //   <input
      //     type="text"
      //     className="text-input"
      //     id="price"
      //     name="price"
      //     onChange={this.handleChange}
      //     placeholder="Enter price"
      //     required
      //     value={this.state.price}
      //   />
      //   <input
      //     type="text"
      //     className="text-input"
      //     id="inStock"
      //     name="inStock"
      //     onChange={this.handleChange}
      //     placeholder="Enter quantity in stock"
      //     required
      //     value={this.state.inStock}
      //   />
      //   <button type="submit">Submit</button>
      // </form>
    );
  }
}
