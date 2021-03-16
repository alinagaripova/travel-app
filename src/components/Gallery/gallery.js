// import { GridList } from "material-ui";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ReactFancyBox from "react-fancybox";
import "react-fancybox/lib/fancybox.css";
import galleryassets from "./galleryfiles";

import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ReactImageGallery from "react-image-gallery";
import "./gallery.scss";
// import IconButton from "@material-ui/core/IconButton";
// import StarBorderIcon from "@material-ui/icons/StarBorder";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
}));

export default function Gallery() {
  return <ReactImageGallery items={galleryassets}></ReactImageGallery>;

  // return (
  //   <div className="gallery-container">
  //     <Container style={{ background: "green" }}>
  //       <Row
  //         style={{
  //           height: 300,
  //           width: "auto",
  //           overflow: "scroll",
  //           display: "flex",
  //           justifyContent: "center",
  //           // flexWrap: "no-wrap",
  //           flexDirection: "row",
  //         }}
  //       >
  //         {galleryassets.map((elem, i) => {
  //           return (
  //             <ReactFancyBox
  //               thumbnail={elem.img}
  //               image={elem.img}
  //               defaultThumbnailWidth={150}
  //               defaultThumbnailHeight={100}
  //             ></ReactFancyBox>
  //           );
  //         })}
  //       </Row>
  //     </Container>
  //   </div>
  // );

  //   const classes = useStyles();

  //   return (
  //     <div className={classes.root}>
  //       <GridList className={classes.gridList} cols={2.5}>
  //         {galleryassets.map((tile) => (
  //           <GridListTile key={tile.img}>
  //             {/* <img src={tile.img} alt={tile.name} /> */}
  //             <ReactFancyBox
  //               thumbnail={tile.img}
  //               image={tile.img}
  //               defaultThumbnailWidth={30}
  //               defaultThumbnailHeight={150}
  //             ></ReactFancyBox>
  //             <GridListTileBar
  //               title={tile.name}
  //               classes={{
  //                 root: classes.titleBar,
  //                 title: classes.title,
  //               }}
  //               //   actionIcon={
  //               //     // <IconButton aria-label={`star ${tile.name}`}>
  //               //     //   <StarBorderIcon className={classes.title} />
  //               //     // </IconButton>
  //               //   }
  //             />
  //           </GridListTile>
  //         ))}
  //       </GridList>
  //     </div>
  //   );
}
