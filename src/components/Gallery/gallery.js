import React from "react";
import galleryassets from "./galleryfiles";

import ReactImageGallery from "react-image-gallery";
import "./gallery.scss";

export default function Gallery() {
  return <ReactImageGallery items={galleryassets}></ReactImageGallery>;
}
