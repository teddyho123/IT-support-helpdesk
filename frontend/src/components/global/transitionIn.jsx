import React from "react";
import { keyframes } from "@emotion/react";
import { Box, Text } from "@chakra-ui/react";

const minimizeHeight = keyframes`
  from {
    height: 100vh;
    top: 0;
  }
  to {
    height: 0vh;
    top: 100vh
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

function BlackScreenIn() {
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
      animation={`${minimizeHeight} 0.75s ease-in-out 0.35s forwards`}
      display="flex"
      alignItems="center"
      justifyContent="center"
      >
      <Text color="white" fontSize="6xl" fontWeight="bold" animation={`${fadeOut} 0.75s ease-in-out 0.2s forwards`}>
        PrioQue
      </Text>
    </Box>
  );
}

export default BlackScreenIn;
