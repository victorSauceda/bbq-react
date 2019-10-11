import React from "react";
import MenuItem from './MenuItem'


export default function MenuItems(props) {

  return (
    <div className="container">
      {props.items.map((item, keyIndex) => {
        return (
          <MenuItem item={item} keyIndex={keyIndex} addToCart={props.addToCart} />
        )
      })}

    </div>
  )
}