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
                this.state.needToBuy.map(item => {
                  return (
                    <div
                      className="listItem"
                      key={item.itemName}
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
              this.state.inMyCart.map(item => {
                return (
                  <div
                    className="listItem"
                    key={item.itemName}
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