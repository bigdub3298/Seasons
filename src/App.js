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
    if (errorMessage && !latitude) {
      return <div>Error: {errorMessage}</div>;
    }

    if (!errorMessage && latitude) {
      return (
        <div>
          <SeasonDisplay lat={latitude} />
        </div>
      );
    }

    // loading
    return <Spinner message="Please accept location request" />;
  };

  useEffect(() => {
    getLatitude();
  }, [latitude]);

  return renderContent(latitude, errorMessage);
}

export default App;
