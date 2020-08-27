import React from "react";
import styled from "styled-components";

export default function Headline(props) {
  const HeadlineContainer = styled.div`
    perspective: 500px;
    transform-origin: center center 0px;
    transform-style: preserve-3d;
    cursor: pointer;
    background-color: black;
  `;
  const StyledHeadline = styled.h1`
    padding: 0 0.2em;
    box-sizing: border-box;
    font-size: calc(32px + (40 - 32) * ((100vw - 300px) / (1800 - 300)));
    font-family: "MenoeGrotesquePro", monospace;
    letter-spacing: 0.02px;
    display: inline-block;
    color: ${props.color};
    transition: all 0.3s ease-in;

    &:hover {
      transform: scale3d(${props.xScale}, ${props.yScale}, ${props.zScale});
      transform: translate3d(
        ${props.xTranslation}em,
        ${props.yTranslation}em,
        ${props.zTranslation}em
      );
      transform: rotate3d(
        ${props.xRotation},
        ${props.yRotation},
        ${props.zRotation},
        5deg
      );
    }
  `;
  return (
    <HeadlineContainer>
      <StyledHeadline>{props.text}</StyledHeadline>
    </HeadlineContainer>
  );
}
