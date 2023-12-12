import React from "react";
class Apple extends React.Component {
  render() {
    const { Appleinfo1 } = this.props;
    const { type, price, color } = Appleinfo1;
    // return <h2>im a Apple</h2>;
    return (
      <h2>
        Hi im a {color} color {type} Apple my Price is {price}
      </h2>
    );
  }
}
export default Apple;
