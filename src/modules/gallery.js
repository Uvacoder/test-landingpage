import React from "react";
import styled from "styled-components";
import { prop } from "styled-tools";

function Gallery({ projects }) {
  return (
    <Wrapper className="gallery">
      {projects.map(project => (
        <Card img={project.img}>
          <Title>{project.title}</Title>
        </Card>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
  grid-auto-rows: 175px;
  width: 100%;
  height: 100%;
  background-color: ${prop("theme.colors.primaryLight")};
`;

const Title = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
`;

const Card = styled.div`
  flex: 175px 1 0;
  max-height: 175px;
  height: 100%;
  position: relative;
  background: url(${props => props.img}) ${prop("theme.colors.primaryLight")};
  background-size: cover;
`;

export default Gallery;
