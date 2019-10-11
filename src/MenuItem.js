import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';




class MenuItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            quantity: 1
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange = (event) => {
        this.setState({
            quantity: event.target.value
        })
    }

    render() {
        const { item } = this.props
        return (
            <div>
                <div className="row" key={this.props.keyIndex}>
                    <h6 className='col-2'>{item.name}</h6>
                    <img className='col-2' src={item.img} alt={item.description} heigth="90" width="90" />
                    <ul >
                        <li className='col-2'>Price:${item.price}</li>
                        <li className='col-2'>Calories: {item.calories}</li>
                    </ul>
                    <select value={this.state.quantity} onChange={this.handleChange}>
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
                    <button className='col-2' onClick={() => this.props.addToCart(item, this.state.quantity)}>Add to cart</button>
                </div>


            </div>
        );
    }
}
export default MenuItem;