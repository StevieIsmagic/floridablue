import React, { Component } from 'react';
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

    if (array2Length > 0){
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

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();

    const itemName = this.state.inputItem.trim().toUpperCase();
    const item = { itemName, itemInCart: false };
    const { needToBuy, inMyCart} = this.state;

    // pass both arrays through validator f(x) to compare inputItem to arrayItem
    this.validator(needToBuy, inMyCart, item)
  }

  addToMyCartHandler = (index, item) => {
    this.setState({
      needToBuy: this.state.needToBuy
        .slice(0, index)
        .concat(this.state.needToBuy.slice(index + 1)),
      inMyCart: [...this.state.inMyCart, {...item, itemInCart: true}]
    })

    console.log("Added Item to Cart: ", this.state)
  }

  removeFromMyCartHandler = (index, item) => {
    this.setState({
      inMyCart: this.state.inMyCart
        .slice(0, index)
        .concat(this.state.inMyCart.slice(index + 1)),
      needToBuy: [...this.state.needToBuy, {...item, itemInCart: false}]
    })

    console.log("Remove Item From Cart: ", this.state)
  }



  render() {
    return (
      <div className="shoppingList">
        <div className="formContainer">
        <h1 className="title">Florida Blue - Shopping List</h1>
          <form>
            <input 
              className="input"
              name='inputItem'
              placeholder='Add List Item'
              value={this.state.inputItem}
              onChange={this.handleChange} 

            />
            <button onClick={this.handleSubmit}>Submit</button>
          </form>

        </div>
        <div className="listContainer">
          <div className="list">
            <h1>Need To Buy</h1>
              {
                this.state.needToBuy.map((item, index) => {
                  return (
                    <div
                      className="listItem"
                      key={item.itemName}
                      onClick={() => this.addToMyCartHandler(index, item)}
                    >
                    {item.itemName}
                    </div>
                  )
                })
              }
          </div>
          <div className="list">
            <h1>In My Cart</h1>
              {
              this.state.inMyCart.map((item, index) => {
                return (
                  <div
                    className="listItem"
                    key={item.itemName}
                    onClick={() => this.removeFromMyCartHandler(index, item)}
                  >
                  {item.itemName}
                  </div>
                )
              })
            }
          </div>
        </div>
        
      </div>
    )
  }
}

export default ShoppingList;