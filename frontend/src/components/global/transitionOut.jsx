import React from "react";
import { keyframes } from "@emotion/react";
import { Box, Text } from "@chakra-ui/react";


const maximizeHeight = keyframes`
  from {
    height: 0vh;
    top: 100vh;
  }
  to {
    height: 100vh;
    top: 0;
  }
`;


const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;


function BlackScreenOut() {
  return (
    <Box
      position="fixed"
      top="100vh"
      left="0"
      width="100vw"
      height="0vh"
      bg="black"
      zIndex="9999"
      animation={`${maximizeHeight} 0.75s ease-in-out forwards`}
      display="flex"
      alignItems="center"
      justifyContent="center"
      >
      <Text color="white" fontSize="6xl" fontWeight="bold" animation={`${fadeIn} 0.75s ease-in-out forwards`}>
        PrioQue
      </Text>
    </Box>
  );
}

export default BlackScreenOut;
