import React from 'react';
import Lottie from "lottie-react";
import reader from "../../../assets/reader.json";

const RightHomePart = () => {
  return (
    <div className="md:w-1/2 mt-4 md:mt-0">
      <Lottie className="w-full h-56 sm:h-96" animationData={reader} loop={true} />
    </div>
  );
};

export default RightHomePart;