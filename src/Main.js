import React from "react";
import { Switch, Link } from "react-router-dom";
// import Home from "./Home";
import Menu from "./Menu";
import Contact from "./Contact";
import Specials from "./Specials.js";
import Sandbox from "./sandbox";
import Cart from "./Cart";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Settings from "./containers/Settings";
import AppliedRoute from "./components/AppliedRoute";
import { NavItem } from "react-bootstrap";
import Checkout from "./containers/Checkout";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: []
    };
    this.addToCart = this.addToCart.bind(this);
    this.updateCartItem = this.updateCartItem.bind(this);
    this.removingCartItem = this.removingCartItem.bind(this);
  }

  updateCartItem(foodobj, qty) {
    this.setState(prevState => {
      const cartItems = [...prevState.cartItems];

      const itemToUpdate = cartItems.find(
        element => foodobj.name === element.name
      );
      itemToUpdate.qty = qty;
      return { cartItems: cartItems };
    });
  }

  removingCartItem(foodobj) {
    console.log(foodobj);
    this.setState(prevState => {
      const cartItems = [...prevState.cartItems];
      let newCart = cartItems.filter(item => item.name !== foodobj.name);
      return { cartItems: newCart };
    });
  }

  addToCart(foodObj, qty) {
    this.setState(prevState => {
      const cartItems = [...prevState.cartItems];
      foodObj.qty = qty;
      cartItems.push(foodObj);
      console.log("New Cart: ", cartItems);

      return { cartItems: cartItems };
    });
  }

  render() {
    console.log("Render CartItems: ", this.state.cartItems);
    return (
      <main>
        <Switch>
          <AppliedRoute exact path="/" appProps={this.props.appProps}>
            <Menu addToCart={this.addToCart} />
          </AppliedRoute>
          <AppliedRoute path="/settings">
            <Settings
              exact
              cartItems={this.state.cartItems}
              component={Settings}
              appProps={this.props.appProps}
            />
          </AppliedRoute>
          <AppliedRoute
            exact
            path="/signup"
            component={Signup}
            appProps={this.props.appProps}
          />
          <AppliedRoute
            exact
            path="/login"
            component={Login}
            handleLogout={this.props.handleLogout}
            appProps={this.props.appProps}
          />
          {/* <AppliedRoute path="/menu" appProps={this.props.appProps}>
            <Menu addToCart={this.addToCart} />
          </AppliedRoute> */}
          <AppliedRoute
            path="/specials"
            component={Specials}
            appProps={this.props.appProps}
          />
          <AppliedRoute path="/contact">
            <Contact env={this.props.env} appProps={this.props.appProps} />
          </AppliedRoute>
          <AppliedRoute path="/cart">
            <Cart
              addToCart={this.addToCart}
              cartItems={this.state.cartItems}
              updateCartItem={this.updateCartItem}
              removingCartItem={this.removingCartItem}
              appProps={this.props.appProps}
              history={this.props.history}
            />
          </AppliedRoute>
          <AppliedRoute
            path="/sandbox"
            exact
            component={Sandbox}
            appProps={this.props.appProps}
          ></AppliedRoute>

          <AppliedRoute path="/checkout">
            <Checkout
              component={Checkout}
              cartItems={this.state.cartItems}
              appProps={this.props.appProps}
            />
          </AppliedRoute>
        </Switch>
      </main>
    );
  }
}
export default Main;
