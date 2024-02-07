import React from "react";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import MovieGallery from "./components/MovieGallery";
import TvShows from "..//src/components/TvShows";
import { Container } from "react-bootstrap";
import "./assets/NetflixLogo.png";

function App() {
  return (
    <>
      <MyNav />

      <Container>
        <TvShows />
        <MovieGallery />
      </Container>
      <MyFooter />
    </>
  );
}

export default App;
