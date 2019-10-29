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
      cartItems: [],

    };
    this.addToCart = this.addToCart.bind(this);
    this.updateCartItem = this.updateCartItem.bind(this);
    this.removingCartItem = this.removingCartItem.bind(this);
  }
  updateCartItem(foodobj, qty) {

    removingCartItem(foodobj) {
      console.log(foodobj)
      this.setState((prevState) => {
        const cartItems = [...prevState.cartItems];
        let newCart = cartItems.filter(item => item.name !== foodobj.name);

        return { cartItems: newCart };
      })
    }


    this.setState((prevState) => {
      const cartItems = [...prevState.cartItems]

      const itemToUpdate = cartItems.find(element => foodobj.name === element.name);
      itemToUpdate.qty = qty;
      return { cartItems: cartItems }
    })
  }
  addToCart(foodObj, qty) {

    this.setState((prevState) => {
      const cartItems = [...prevState.cartItems];
      foodObj.qty = qty
      cartItems.push(foodObj);
      console.log(foodObj);



      return { cartItems: cartItems };
    });
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
            <Cart addToCart={this.addToCart} cartItems={this.state.cartItems} updateCartItem={this.updateCartItem} removingCartItem={this.removingCartItem} />
          </Route>
          />
        </Switch>
      </main>
    );
  }
}
export default Main;
