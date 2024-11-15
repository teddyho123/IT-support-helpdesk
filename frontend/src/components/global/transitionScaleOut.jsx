import React from "react";
import { keyframes } from "@emotion/react";
import { Box, Text } from "@chakra-ui/react";

const scaleOut = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
    }
  
  100% {
    transform: scale(1);
    opacity: 1;
    }
`;

const fadeOut = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

function BlackScreenScaleOut() {
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      width="100vw"
      height="100vh"
      bg="black"
      zIndex="9999"
      animation={`${scaleOut} 0.4s ease-in-out forwards`}
      display="flex"
      alignItems="center"
      justifyContent="center"
      transformOrigin="center"
      >
      <Text color="white" fontSize="6xl" fontWeight="bold" animation={`${fadeOut} 0.3s ease-in-out forwards`}>
        PrioQue
      </Text>
    </Box>
  );
}

export default BlackScreenScaleOut;
