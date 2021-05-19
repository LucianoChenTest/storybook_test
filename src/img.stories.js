import React from "react";

import imageFile from "./assets/img/test.jpeg"; //will be converted to base64

export default {
  title: "img",
};

const image = {
  src: imageFile,
  alt: "my image",
};

export const withAnImage = () => <img src={imageFile} alt={image.alt} />;
export const withAnStaticImage = () => <img src={"test.jpeg"} alt={image.alt} />;
