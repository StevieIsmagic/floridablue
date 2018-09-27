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

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    
    let item = { itemName: this.state.inputItem, itemInCart: false };

    this.setState({
      needToBuy: [...this.state.needToBuy, item],
      inputItem: ''
    });

    console.log('Updated State: ', this.state)
  }

  addToMyCartHandler = (index, item) => {
    alert(`${item.itemName}, ${index} Added to cart!`)
  }

  removeFromMyCartHandler = (index, item) => {
    alert(`${item.itemName}, ${index} Removed from cart!`)
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