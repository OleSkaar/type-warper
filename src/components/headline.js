import React from "react";
import styled from "styled-components";

export default function Headline(props) {
  const StyledHeadline = styled.h1`
    color: ${props.color};
    transform: perspective(1000px) rotateY(65deg);
    outline: 1px solid transparent;
    box-shadow: 10px solid black;
  `;
  return <StyledHeadline>{props.text}</StyledHeadline>;
}

