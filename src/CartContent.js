import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
class CartContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            quantity: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            quantity: event.target.value
        })
    }

    render() {
        let quantityTotal = this.state.quantity
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
                        {this.props.cartItems.map((item, i) => {
                            return (
                                <tr key={i}>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.qty}</td>
                                    <td>{item.price * item.qty}</td>
                                    {/* <td><select onClick={this.handleChange.bind(this)}>
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

                                    </select></td> */}
                                </tr>

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