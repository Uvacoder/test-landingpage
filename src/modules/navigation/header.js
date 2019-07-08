import React from "react";
import styled from "styled-components";
import { prop } from "styled-tools";

function Header() {
  return <Container className="header" />;
}

const Container = styled.div`
  height: 40px;
  background-color: ${prop("theme.colors.primary")};
`;

export default Header;
