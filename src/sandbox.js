import React from 'react';
import { ConsoleLogger } from '@aws-amplify/core';
import { API } from "aws-amplify";
import { async } from 'q';


export default class Sandbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      imgSrc: '',
      alt: '',
      price: '',
      inStock: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleChange = async event => {
    this.setState({
      [event.target.name]: event.target.value

    });
  }

  handleSubmit = async event => {
    event.preventDefault();

    let body = {
      name: this.state.name,
      description: this.state.description,
      imgSrc: this.state.imgSrc,
      alt: this.state.alt,
      price: this.state.price,
      inStock: this.state.inStock
    }

    console.log(body)

    try {
      const response = await API.post('rest-api', '/notes', { body });
      console.log(response)
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="text-input"
          id="name"
          name="name"
          onChange={this.handleChange}
          placeholder="Enter Name of Item"
          required
          value={this.state.name}
        />
        <input
          type="text"
          className="text-input"
          id="description"
          name="description"
          onChange={this.handleChange}
          placeholder="Enter a description"
          required
          value={this.state.description}
        />
        <input
          type="text"
          className="text-input"
          id="imgSrc"
          name="imgSrc"
          onChange={this.handleChange}
          placeholder="Enter the image source"
          required
          value={this.state.imgSrc}
        />
        <input
          type="text"
          className="text-input"
          id="alt"
          name="alt"
          onChange={this.handleChange}
          placeholder="Enter the alternative text"
          required
          value={this.state.alt}
        />
        <input
          type="text"
          className="text-input"
          id="price"
          name="price"
          onChange={this.handleChange}
          placeholder="Enter price"
          required
          value={this.state.price}
        />
        <input
          type="text"
          className="text-input"
          id="inStock"
          name="inStock"
          onChange={this.handleChange}
          placeholder="Enter quantity in stock"
          required
          value={this.state.inStock}
        />
        <button type="submit">Submit</button>
      </form>
    )
  }

}