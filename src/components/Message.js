import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      messsage: "Welcome visitor",
    };
  }
  changeMessage(){
      this.setState({
          messsage:'Thank you for subsribing'
      })
  }
  render() {
    return (
      <div>
        <h1>{this.state.messsage}</h1>
        <button onClick={()=>this.changeMessage()}>Subsrcibe</button>
      </div>
    );
  }
}

export default Message;
