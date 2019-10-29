import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import CartItem from './cartItem'
class CartContent extends React.Component {
    constructor(props) {
        super(props)




    }

    render() {

        return (
            <div>
                <table className="table table-dark table-striped">
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                        </tr>
                    </tbody>
                    <tbody>
                        {this.props.cartItems.map((item, keyIndex) => {
                            return (
                                <CartItem key={keyIndex} addToCart={this.props.addToCart} updateCartItem={this.props.updateCartItem} removingCartItem={this.props.removingCartItem} item={item} />
                            )
                        })}

                    </tbody>

                </table>

                <h3 className="text-center">Cart Total: ${this.props.cartItems.reduce((acc, next) => {
                    console.log(acc, next.price)
                    return acc + (next.price * next.qty)
                }, 0)}</h3>
            </div>

        )
    }
}
export default CartContent;