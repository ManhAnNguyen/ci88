import { Component } from "react";

class Something extends Component {
  state = {
    value: 0,
  };

  handleClick = () => {
    this.setState({
      value: this.state.value + 1,
    });
  };

  componentWillUnmount() {
    alert("Buy");
  }

  render() {
    return (
      <>
        <h2>SOMETHING : {this.props.name}</h2>
        <h2>STATE : {this.state.value}</h2>
        <button onClick={this.handleClick}>Increase</button>
      </>
    );
  }
}

export default Something;
