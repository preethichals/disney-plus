import React from "react";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import Movies from "./Movies";
import Viewers from "./Viewers";

function Home() {
  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Movies />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  min-height: calc(100vh-70px);
  padding: calc(3.5vw +5px);
  position: relative;
  overflow-x: hidden;

  &:before {
  }
  background: url("/images/home-background.png") center center/ cover no-repeat
    fixed;
  content: "Helloo";
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: -1;
`;
