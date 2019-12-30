import React, { Component } from "react";
import SeasonDisplay from "./components/SeasonDisplay";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: null,
      season: ""
    };

    // Get User latitude
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          lat: position.coords.latitude
        });
      },
      err => {
        if (err.code === 1) {
          this.setState({
            lat: 38.89511
          });
        } else {
          console.log(err);
        }
      }
    );
  }

  render() {
    return (
      <div>
        <SeasonDisplay lat={this.state.lat} />
      </div>
    );
  }
}

export default App;
