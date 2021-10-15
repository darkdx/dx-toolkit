import React from "react";
import styled, { keyframes } from "styled-components";
// import PanIcon from "./PanIcon";
// import PancakeIcon from "./PancakeIcon";
import DxIcon from "../Svg/Icons/SpinnerLogo";
import { SpinnerProps } from "./types";

const rotate = keyframes`
  from {
    transform: rotateY(0deg);
    /* transform: rotate(0deg); */
  }
  to {
    /* transform: rotate(360deg); */
    transform: rotateY(360deg);
  }
`;

const float = keyframes`
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(30px);
	}
	100% {
		transform: translatey(0px);
	}
`;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 40px;
`;

// const RotatingPancakeIcon = styled(DxIcon)`
//   position: absolute;
//   top: 0;
//   left: 0;
//   animation: ${rotate} 2s linear infinite;
//   transform: translate3d(0, 0, 0);
// `;

const FloatingPanIcon = styled(DxIcon)`
  animation: ${rotate} 2s ease-in-out infinite;
  width: 35px;
  transform: translate3d(0, 0, 0);
`;
// const FloatingPanIcon2 = styled(DxIcon)`
//   animation: FloatingPanIcon2Float 2s ease-in-out infinite;
//   width: 20px;
//   left: 0;
//   transform: translate3d(0, 0, 0);
//   @keyframes FloatingPanIcon2Float {
//     0% {
//       opacity: 1;
//       transform: translatey(0px);
//     }
//     50% {
//       opacity: 0;
//       transform: translatey(50px);
//     }
//     100% {
//       opacity: 0;
//       transform: translatey(0px);
//     }
//   }
// `;
// const FloatingPanIcon3 = styled(DxIcon)`
//   animation: FloatingPanIcon2Float 2.3s ease-in-out infinite;
//   width: 20px;
//   right: 0;
//   transform: translate3d(0, 0, 0);
//   @keyframes FloatingPanIcon2Float {
//     0% {
//       opacity: 1;
//       transform: translatey(0px);
//     }
//     50% {
//       opacity: 0;
//       transform: translatey(50px);
//     }
//     100% {
//       opacity: 0;
//       transform: translatey(0px);
//     }
//   }
// `;

const Spinner: React.FC<SpinnerProps> = () => {
  return (
    <Container>
      {/* <FloatingPanIcon2 /> */}
      <FloatingPanIcon />
      {/* <FloatingPanIcon3 /> */}
      {/* <FloatingPanIcon width={`${size}px`} /> */}
    </Container>
  );
};

export default Spinner;
