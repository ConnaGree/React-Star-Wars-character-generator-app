import React from "react";

class NameComponent extends React.Component {
  render() {
    return <h1 className="characterName">{this.props.name}</h1>;
  }
}

export default NameComponent;
