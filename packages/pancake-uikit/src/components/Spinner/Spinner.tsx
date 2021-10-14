import React from "react";
import styled, { keyframes } from "styled-components";
// import PanIcon from "./PanIcon";
// import PancakeIcon from "./PancakeIcon";
import DxIcon from "../Svg/Icons/Logo";
import { SpinnerProps } from "./types";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const float = keyframes`
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(10px);
	}
	100% {
		transform: translatey(0px);
	}
`;

const Container = styled.div`
  position: relative;
`;

// const RotatingPancakeIcon = styled(DxIcon)`
//   position: absolute;
//   top: 0;
//   left: 0;
//   animation: ${rotate} 2s linear infinite;
//   transform: translate3d(0, 0, 0);
// `;

const FloatingPanIcon = styled(DxIcon)`
  animation: ${float} 6s ease-in-out infinite;
  width: 200px;
  transform: translate3d(0, 0, 0);
`;

const Spinner: React.FC<SpinnerProps> = () => {
  return (
    <Container>
      <FloatingPanIcon />
      {/* <FloatingPanIcon width={`${size}px`} /> */}
    </Container>
  );
};

export default Spinner;
