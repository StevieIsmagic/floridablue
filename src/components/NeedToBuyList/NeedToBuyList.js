import React from "react";
import ArrayList from "../ArrayList/ArrayList";

import "./NeedToBuyList.css";

const NeedToBuyList = (props) => {
  return (
    <div className="needToBuyListContainer">
      <h1>Need To Buy</h1>
      <ArrayList 
        arrayList={props.needToBuyArray}
        switchCart={props.addToCart}
      />
    </div>
  );
}

export default NeedToBuyList;


