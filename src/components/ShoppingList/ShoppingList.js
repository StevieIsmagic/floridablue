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

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    alert('Item Added!')
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
          </div>
          <div className="list">
            <h1>In My Cart</h1>
          </div>
        </div>
        
      </div>
    )
  }
}

export default ShoppingList;