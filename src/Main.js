import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Menu from "./Menu";
import Contact from "./Contact";
import Specials from "./Specials.js";
import Cart from "./Cart";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: []
    };
    this.addToCart = this.addToCart.bind(this);
  }
  addToCart(foodObj) {

    this.setState({ cartItems: this.state.cartItems.push(foodObj) });
    console.log(this.state.cartItems);
  }

  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/menu" ><Menu addToCart={this.addToCart} /></Route>
          <Route path="/specials" component={Specials} />
          <Route path="/contact">
            <Contact env={this.props.env} />
          </Route>
          <Route path="/cart">
            <Cart addToCart={this.addToCart} cartItems={this.state.cartItems} />
          </Route>
          />
        </Switch>
      </main>
    );
  }
}
export default Main;
