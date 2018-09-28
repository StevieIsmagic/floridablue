import React, { Component } from 'react';
import Form from '../Form/Form';
import NeedToBuyList from '../NeedToBuyList/NeedToBuyList';
import InMyCartList from '../InMyCartList/InMyCartList';

import './ShoppingList.css';

class ShoppingList extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      inputItem: "",
      needToBuy: [],
      inMyCart: []
    }
  }

  validator = (array1, array2, item) => {
    const array1Length = array1.length;
    const array2Length = array2.length;
  
    if (item.itemName === "") {
      alert('You cannot enter a blank submission. Please try again.')
      return;
    }

    if (array1Length > 0) {
      for (let i = 0; i < array1.length; i++) {
        const arrayItemName = array1[i].itemName;
        
        if (arrayItemName === item.itemName) {
          alert(`${item.itemName} is already on your 'To Buy' list.`)
          return;
        }
      }   
    }

    if (array2Length > 0) {
      for (let i = 0; i < array2.length; i++) {
        const arrayItemName = array2[i].itemName;
        if (arrayItemName === item.itemName) {
          alert(`${item.itemName} is already in your cart.`)
          return;
        }
      }
    }

    this.setState({
      needToBuy: [...this.state.needToBuy, item],
      inputItem: ''
    });
  }

  handleSubmit = (inputItem, event) => {
    event.preventDefault();

    const itemName = inputItem.trim().toUpperCase();
    const item = { itemName, itemInCart: false };
    const { needToBuy, inMyCart} = this.state;

    // pass both arrays through validator f(x) to compare inputItem to arrayItem
    this.validator(needToBuy, inMyCart, item);
  }
  
  addToMyCartHandler = (index, item) => {
    this.setState({
      needToBuy: this.state.needToBuy
        .slice(0, index)
        .concat(this.state.needToBuy.slice(index + 1)),
      inMyCart: [...this.state.inMyCart, {...item, itemInCart: true}]
    });
  }

  removeFromMyCartHandler = (index, item) => {
    this.setState({
      inMyCart: this.state.inMyCart
        .slice(0, index)
        .concat(this.state.inMyCart.slice(index + 1)),
      needToBuy: [...this.state.needToBuy, {...item, itemInCart: false}]
    });
  }

  render() {
    return (
      <div className="shoppingList">
        <Form
          inputItem={this.state.inputItem}
          handleSubmit={this.handleSubmit}
        />
        <div className="listContainer">
          <NeedToBuyList 
            needToBuyArray={this.state.needToBuy}
            addToCart={this.addToMyCartHandler}
          />
          <InMyCartList 
            inMyCartArray={this.state.inMyCart}
            removeFromCart={this.removeFromMyCartHandler}
          />  
        </div>
      </div>
    );
  }
}

export default ShoppingList;