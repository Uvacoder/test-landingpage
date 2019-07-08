import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { prop } from "styled-tools";

HeaderUnderlined.propTypes = {
  label: PropTypes.string.isRequired
};

function HeaderUnderlined({ className, label }) {
  return <Label className={className}>{label}</Label>;
}

const Label = styled.h1`
  font-size: 48px;
  position: relative;
  text-transform: uppercase;
  margin: 0;
  ::after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 100%;
    border-bottom: 4px solid ${prop("theme.colors.primaryLight")};
  }
`;

export default HeaderUnderlined;
