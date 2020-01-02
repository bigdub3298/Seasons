import React, { Component } from "react";
import SeasonDisplay from "./components/SeasonDisplay";
import Spinner from "./components/Spinner";

export class App extends Component {
  state = {
    lat: null,
    errorMessage: ""
  };

  componentDidMount() {
    // Get User latitude
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          lat: position.coords.latitude
        });
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return (
        <div>
          <SeasonDisplay lat={this.state.lat} />
        </div>
      );
    }

    // loading
    return <Spinner message="Please accept location request" />;
  }
}

export default App;
