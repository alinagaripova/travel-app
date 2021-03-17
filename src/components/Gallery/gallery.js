import React from "react";
import galleryassets from "./galleryfiles";

import ReactImageGallery from "react-image-gallery";
import "./gallery.scss";
import { useParams } from "react-router";

export default function Gallery() {
  const { id } = useParams();
  return <ReactImageGallery items={galleryassets[parseInt(id) - 1]}></ReactImageGallery>;
}
