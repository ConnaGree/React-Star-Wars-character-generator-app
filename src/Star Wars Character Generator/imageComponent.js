import React from "react";

class ImageComponent extends React.Component {
  render() {
    return (
      <img
        src={this.props.image}
        className="characterImg"
        alt={this.props.name}
      ></img>
    );
  }
}

export default ImageComponent;
