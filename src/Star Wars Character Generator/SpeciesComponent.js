import React from "react";

class SpeciesComponent extends React.Component {
  render() {
    return <p className="speciesName">Species: {this.props.species}</p>;
  }
}

export default SpeciesComponent;
