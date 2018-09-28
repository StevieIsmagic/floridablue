import React, { Component } from "react";
import "./Form.css"

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputItem: "",
    }
  }

  componentWillReceiveProps() {
    this.setState({inputItem: this.props.inputItem})
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div className="formContainer">
          <h1 className="title">Florida Blue Shopping List</h1>
          <form>
            <input 
              className="input"
              name="inputItem"
              placeholder="Add List Item"
              value={this.state.inputItem}
              onChange={this.handleChange} 
              />
            <button className="button" onClick={(event)=> this.props.handleSubmit(this.state.inputItem, event)}>Submit</button>
          </form>
        </div>
    );
  }
}

export default Form;