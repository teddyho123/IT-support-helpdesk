import { Box, Flex, HStack } from "@chakra-ui/react";
import { CiLogout } from "react-icons/ci";



function Navbar() {


    return (

        <Box width="100%" bg="bg" shadow="md" p={4}>
            <Flex gap="10" alignItems="center" justifyContent="center">
                <Box marginEnd="auto">Menu</Box>
                <Box marginEnd="auto">PrioQue</Box>
                <Box>
                    <HStack>
                        <CiLogout/>
                        Log Out
                    </HStack>
                </Box>
            </Flex>
        </Box>



    );

}

export default Navbar;