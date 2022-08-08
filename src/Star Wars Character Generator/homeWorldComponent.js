import React from "react";

class HomeWorldComponent extends React.Component {
  render() {
    return <p className="homeWorld">Home World - {this.props.home}</p>;
  }
}

export default HomeWorldComponent;
