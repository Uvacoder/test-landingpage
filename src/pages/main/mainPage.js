import React from "react";
import styled from "styled-components";
import { prop, switchProp } from "styled-tools";

import PageWrapper from "modules/navigation/pageWrapper";
import HeaderUnderlined from "elements/headers/headerUnderlined";
import Gallery from "modules/gallery";

const projects = [
  {
    img: "https://picsum.photos/id/237/200",
    title: "Title"
  },
  {
    img: "https://picsum.photos/id/217/200",
    title: "Title"
  },
  {
    img: "https://picsum.photos/id/277/200",
    title: "Title"
  },
  {
    img: "https://picsum.photos/id/237/200",
    title: "Title"
  },
  {
    img: "https://picsum.photos/id/117/200",
    title: "Title"
  },
  {
    img: "https://picsum.photos/id/377/200",
    title: "Title"
  },
  {
    img: "https://picsum.photos/id/437/200",
    title: "Title"
  },
  {
    img: "https://picsum.photos/id/248/200",
    title: "Title"
  },
  {
    img: "https://picsum.photos/id/112/200",
    title: "Title"
  },
  {
    img: "https://picsum.photos/id/317/200",
    title: "Title"
  },
  {
    img: "https://picsum.photos/id/117/200",
    title: "Title"
  },
  {
    img: "https://picsum.photos/id/377/200",
    title: "Title"
  }
];

function MainPage() {
  return (
    <PageWrapper>
      <Wrapper className="main-page">
        <Headline className="headline-section" mode="light">
          <h1 className="title">We think creative be creative</h1>
          <h2 className="subtitle">Like to do creative works</h2>
        </Headline>
        <About className="about-section" mode="dark">
          <Title label="About Us" />
          <h2 className="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </h2>
          <Gallery projects={projects} />
        </About>
      </Wrapper>
    </PageWrapper>
  );
}

const Wrapper = styled.div``;

const Section = styled.div`
  font-family: ${prop("theme.fonts.secondary")};
  color: ${switchProp("mode", {
    light: prop("theme.colors.primary"),
    dark: prop("theme.colors.primaryDark")
  })};
  background-color: ${switchProp("mode", {
    light: prop("theme.colors.primaryDark"),
    dark: prop("theme.colors.primary")
  })};
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 708px;
  .title {
    font-size: 72px;
    margin: 0 0 19px 0;
  }
  .subtitle {
    font-size: 36px;
    margin: 0;
  }
  .description {
    font-size: 14px;
    font-family: ${prop("theme.fonts.primary")};
    font-weight: 100;
    max-width: 545px;
    text-align: center;
    text-transform: initial;
    margin: 0;
  }
`;

const Headline = styled(Section)``;

const About = styled(Section)`
  height: auto;
`;

const Title = styled(HeaderUnderlined)`
  margin-bottom: 20px;
`;

export default MainPage;
