import React from "react";
import styled from "styled-components";

export default function Headline(props) {
  const StyledHeadline = styled.h1`
    padding: 0 0.2em;
    box-sizing: border-box;
    font-size: calc(32px + (40 - 32) * ((100vw - 300px) / (1800 - 300)));
    font-family: "MenoeGrotesquePro", monospace;
    letter-spacing: 0.02px;
    display: inline-block;
    color: ${props.color};
    transform: rotate3d(${props.xRotation}, ${props.yRotation}, ${props.zRotation}, 45deg);
    background-color: black;
  `;
  return <StyledHeadline>{props.text}</StyledHeadline>;
}
