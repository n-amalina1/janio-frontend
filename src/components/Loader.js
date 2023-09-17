import React from "react";
import Lottie from "react-lottie-player";
import * as loadingAnimation from "../assets/lotties/loading.json";

function Loader() {
  return (
    <div className="container-full-height d-flex justify-content-center align-items-center">
      <Lottie
        loop
        animationData={loadingAnimation}
        play
        style={{
          height: "50vh",
          width: "100%",
        }}
      />
    </div>
  );
}

export default Loader;
