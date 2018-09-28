import React from "react";
import "./ArrayList.css"; 

const ArrayList = (props) => {
  return (
    <div>
      {
        props.arrayList.map((item, index) => {
          return (
            <div
              className="listItem"
              key={item.itemName}
              onClick={() => props.switchCart(index, item)}
            >
            {item.itemName}
            </div>
          );
        })
      }
    </div>
  );
}

export default ArrayList;