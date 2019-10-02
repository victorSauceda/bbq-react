import React from 'react';



class Cart extends React.Component {
    constructor(props) {
        super(props)


    }
    render() {
        let cartBuilder = this.props.cart.map((item, i) => {
            return (
                <tr key={i}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                </tr>
            )
        })
        return (
            <div>
                <h2>My Cart</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartBuilder}
                    </tbody>
                </table>

            </div>
        );
    }
}
export default Cart;