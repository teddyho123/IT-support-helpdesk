import React from "react";
import { keyframes } from "@emotion/react";
import { Box, Text } from "@chakra-ui/react";

const scaleIn = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
    }
  
  100% {
    transform: scale(0);
    opacity: 0;
    }
`;

const fadeIn = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

function BlackScreenScaleIn() {
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      width="100vw"
      height="100vh"
      bg="black"
      zIndex="9999"
      animationDelay="1.5s"
      animation={`${scaleIn} 1s ease-in-out forwards`}
      display="flex"
      alignItems="center"
      justifyContent="center"
      transformOrigin="center"
      >
      <Text color="white" fontSize="6xl" fontWeight="bold" animation={`${fadeIn} 1s ease-in-out 0.15s forwards`}>
        PrioQue
      </Text>
    </Box>
  );
}

export default BlackScreenScaleIn;
