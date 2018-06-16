import React from 'react';
import styled, { keyframes } from 'styled-components';
import { NOMARL_GRAY } from '../config';

const Loader = (props) => (
  <StyleLoader {...props}>
    <div />
    <div />
    <div />
    <div />
  </StyleLoader>
);

export default Loader;

const LoaderKeyframes = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyleLoader = styled.div`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
  animation: ${LoaderKeyframes} 5s ease-in-out infinite;
  animation-direction: alternate;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 51px;
    height: 51px;
    margin: 6px;
    border: 6px solid #fff;
    border-radius: 50%;
    animation: ${LoaderKeyframes} 1.25s ease-in-out infinite;
    animation-direction: alternate;
    border-color: ${NOMARL_GRAY} transparent transparent transparent;
    &:nth-child(1) {
      animation-delay: -0.15s;
    }
    &:nth-child(2) {
      animation-delay: -0.3s;
    }
    &:nth-child(3) {
      animation-delay: -0.42s;
    }
  }
`;


