import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Carousel from "./Carousel";

function Card({ imagePaths, subText, header, children }) {
  return (
    <div className="w-full sm:w-80 rounded-2xl overflow-hidden shadow-lg bg-white">
      <div className="w-full h-48 relative">
        <Carousel
          images={imagePaths}
          imageClass="rounded-tl-2xl rounded-tr-2xl"
        ></Carousel>
      </div>
      <div className="mt-4 px-3 mb-2">
        <h1 className="font-Merriweather text-xl font-bold">{header}</h1>
        <p className="mt-2 text-sm">{subText}</p>
      </div>
      <div className="mt-4 px-3 mb-2">{children}</div>
    </div>
  );
}

Card.propTypes = {
  imagePaths: PropTypes.array.isRequired,
  header: PropTypes.string,
  subText: PropTypes.string,
};

export default Card;
