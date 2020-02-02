import React, { useState, useEffect } from "react";
import SeasonDisplay from "./components/SeasonDisplay";
import Spinner from "./components/Spinner";

export function App() {
  const [latitude, setLatitude] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const getLatitude = () => {
    // Get User latitude
    window.navigator.geolocation.getCurrentPosition(
      position => {
        setLatitude(position.coords.latitude);
      },
      err => {
        setErrorMessage(err.message);
      }
    );
  };

  const renderContent = (latitude, errorMessage) => {
    if (errorMessage) {
      return <div>Error: {errorMessage}</div>;
    } else if (latitude) {
      return (
        <div>
          <SeasonDisplay lat={latitude} />
        </div>
      );
    } else {
      // loading
      return <Spinner message="Please accept location request" />;
    }
  };

  useEffect(() => {
    getLatitude();
  }, []);

  return renderContent(latitude, errorMessage);
}

export default App;
