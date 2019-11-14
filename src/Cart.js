import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContent from './CartContent'



class Cart extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }
    render() {
        console.log('Cart props: ', this.props)
        return (
            <div>
                <h2 className="text-center">My Cart</h2>

                {(this.props.cartItems.length > 0) ? 
                <CartContent 
                    cartItems={this.props.cartItems} 
                    addToCart={this.props.addToCart} 
                    updateCartItem={this.props.updateCartItem} 
                    removingCartItem={this.props.removingCartItem} 
                /> : 
                <p className="alert alert-danger" role="alert">
                    Cart is currently empty</p>
                }
            </div>
        );
    }
}
export default Cart;