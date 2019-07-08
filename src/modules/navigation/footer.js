import React from "react";
import styled from "styled-components";
import { prop } from "styled-tools";

function Footer() {
  return <Wrapper className="footer" />;
}

const Wrapper = styled.div`
  height: 40px;
  background-color: ${prop("theme.colors.primaryDark")};
`;

export default Footer;
