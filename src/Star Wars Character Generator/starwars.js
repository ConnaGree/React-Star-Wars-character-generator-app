import React from "react";
import HomeWorldComponent from "./homeWorldComponent";
import ImageComponent from "./imageComponent";
import NameComponent from "./NameComponent";
import SpeciesComponent from "./SpeciesComponent";

class StarWars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadedCharacter: false,
      name: null,
      height: null,
      home_world: null,
      species: null,
      image: null,
    };
  }

  getRandomCharacter() {
    const randomNumber = Math.ceil(Math.random() * 88);
    const url = `https://raw.githubusercontent.com/akabab/starwars-api/master/api/id/${randomNumber}.json`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          loadedCharacter: true,
          name: data.name,
          height: data.height,
          home_world: data.homeworld,
          species: data.species,
          image: data.image,
        });

        console.log(this.props.image);
      });
  }

  render() {
    return (
      <div>
        {this.state.loadedCharacter && (
          <div className="cardContainer">
            <div className="imageContainer">
              <ImageComponent image={this.state.image} />
            </div>
            <div className="characterDetails">
              <NameComponent name={this.state.name} />
              <HomeWorldComponent home={this.state.home_world} />
              <SpeciesComponent species={this.state.species} />
            </div>
          </div>
        )}

        <button
          onClick={() => this.getRandomCharacter()}
          className="randomizeBtn"
        >
          Randomize
        </button>
      </div>
    );
  }
}

export default StarWars;
