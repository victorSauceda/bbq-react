import React from 'react';
import MenuItems from './MenuItems';
import items from './items'

class Menu extends React.Component {
  constructor(props) {
    super(props)



  }

  render() {
    return (
      <div>
        <MenuItems items={items} addToCart={this.props.addToCart} cartItems={this.props.cartItems} />
      </div>
    );
  }
}
export default Menu;