import React from "react";
import { keyframes } from "@emotion/react";
import { Box, Text } from "@chakra-ui/react";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

function BlackScreenFadeOut() {
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      width="100vw"
      height="100vh"
      bg="black"
      zIndex="9999"
      animation={`${fadeIn} 1.5s ease-in-out forwards`}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Text color="white" fontSize="6xl" fontWeight="bold">
        PrioQue
      </Text>
    </Box>
  );
}

export default BlackScreenFadeOut;
