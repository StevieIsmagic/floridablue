import React from "react";
import ArrayList from '../ArrayList/ArrayList';

import "./InMyCartList.css";

const InMyCartList = (props) => {
  return (
    <div className="cartListContainer">
      <h1>In My Cart</h1>
      <ArrayList 
        arrayList={props.inMyCartArray}
        switchCart={props.removeFromCart}
      />
    </div>
  );
}

export default InMyCartList;
