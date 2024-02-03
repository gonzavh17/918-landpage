import React from "react";

function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="loading-screen_container">
        <p className="loading-screen-title">The journey is loading</p>
        <div class="loader"></div>
      </div>
    </div>
  );
}

export default LoadingScreen;
