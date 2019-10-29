import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
class CartItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            quantity: props.item.qty,
            removingCartItem: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (event) => {
        this.setState({
            quantity: event.target.value
        })

    }
    handleRemove = (event) => {
        this.setState({
            removingCartItem: true
        })
    }

    render() {

        const { item } = this.props
        return (



            <tr>

                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.qty}        <select value={this.state.quantity} onChange={this.handleChange} >
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

                </select>
                    <button onClick={() => this.props.updateCartItem(item, this.state.quantity)}>change qty</button>
                    <button onClick={() => this.props.removingCartItem(item)}>Remove Item</button></td>
                <td>{item.price * item.qty}
                </td>
            </tr>

        )
    }
}




export default CartItem;