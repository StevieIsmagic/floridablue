import React, { Component } from 'react';
import './ShoppingList.css';

class ShoppingList extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }
  render() {
    return (
      <div className="shoppingList">
        <div className="formContainer">
        <h1 className="title">Florida Blue - Shopping List</h1>
          <form>
            <input className="input"/>
            <button>Submit</button>
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