import { Button, Col, Row } from "react-bootstrap";
import "./App.css";
import Video from "./components/Video";
import { useState } from "react";
import GifAndImage from "./components/GifAndImage";

function App() {
  const [contextType, setContentType] = useState("img");
  const [favorite, setFavorite] = useState({
    img: false,
    gif: false,
    video: false,
  });

  const handleClick = () => {
    if (contextType === "img") {
      setFavorite((prevState) => ({
        ...prevState,
        img: !prevState.img,
      }));
    } else if (contextType === "gif") {
      setFavorite((prevState) => ({
        ...prevState,
        gif: !prevState.gif,
      }));
    } else if (contextType === "video") {
      setFavorite((prevState) => ({
        ...prevState,
        video: !prevState.video,
      }));
    }
  };
  return (
    <Row
      style={{ height: "100vh" }}
      className="d-flex align-items-center ms-2 me-2"
    >
      <Col xs={12} lg={6} style={{ height: "50vh" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          onClick={handleClick}
          style={{
            position: "absolute",
            zIndex: "1",
            marginLeft: "1rem",
            marginTop: "1rem",
            cursor: "pointer",
          }}
          fill={
            contextType === "img"
              ? favorite.img
                ? "#E966A0"
                : "white"
              : contextType === "gif"
              ? favorite.gif
                ? "#E966A0"
                : "white"
              : favorite.video
              ? "#E966A0"
              : "white"
          }
          className="bi bi-heart-fill"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
          />
        </svg>
        {contextType === "video" ? (
          <Video />
        ) : contextType === "img" ? (
          <GifAndImage src="./img.jpg" />
        ) : (
          <GifAndImage src="./gif.gif" />
        )}
      </Col>
      <Col xs={12} lg={6}>
        <Row>
          <h1 style={{ fontSize: "5.5rem" }}>Multimedia Player</h1>

          <h3>Fixed Container Dimensions</h3>

          <h3>Full Content Display</h3>

          <h3>Responsive Design</h3>

          <h3>Auto-play Feature</h3>

          <h3>Interactive Favorites Feature</h3>
        </Row>
        <Row>
          <Col xs="auto">
            <Button
              onClick={() => {
                setContentType("img");
              }}
              style={{backgroundColor:"#2D4356", border:"none"}}
            >
              Image
            </Button>
          </Col>
          <Col xs="auto">
            <Button
              onClick={() => {
                setContentType("gif");
              }}
              style={{backgroundColor:"#2D4356", border:"none"}}
            >
              Gif
            </Button>
          </Col>
          <Col xs="auto">
            <Button
              onClick={() => {
                setContentType("video");
              }}
              style={{backgroundColor:"#2D4356", border:"none"}}
            >
              Video
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default App;
