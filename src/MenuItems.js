import React from "react";


export default function MenuItems(props) {
  let styles = {
    listStyle: 'none'
  }
  return (
    <div>
      {props.items.map((item, i) => {
        return (
          <div key={i}>
            <h3>{item.name}</h3>
            <img src={item.img} alt={item.description} heigth="90" width="90" />
            <ul style={styles}>
              <li>${item.price}</li>
              <li>Calories: {item.calories}</li>
            </ul>
            <button onClick={() => props.addToCart(item)}>Add to cart</button>
          </div>
        )
      })}

    </div>
  )
}