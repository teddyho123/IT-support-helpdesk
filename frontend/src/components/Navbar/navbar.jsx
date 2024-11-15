import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react";
import { CiLogout } from "react-icons/ci";
import usePageTransition from '../../components/global/usePageTransition';
import BlackScreenFadeOut from '../../components/global/transitionFadeOut';
import { TiThMenuOutline } from "react-icons/ti";


function Navbar() {
    const { handleNavigate, isTransitioning } = usePageTransition();


    return (
        <>
            {isTransitioning && <BlackScreenFadeOut />}
            <Box width="100%" bg="bg" shadow="md" p={4}>
                <Flex gap="10" alignItems="center" justifyContent="center">
                    <Button marginEnd="auto" colorPalette={'white'} variant='ghost'><TiThMenuOutline />Menu</Button>
                    <Box marginEnd="auto" position="absolute"><Text fontWeight="extrabold" fontSize="3xl">PrioQue</Text></Box>
                    <Button colorPalette={'white'} variant='ghost' onClick={() => handleNavigate('/')}>
                        <HStack>
                            <CiLogout/>
                            Log Out
                        </HStack>
                    </Button>
                </Flex>
            </Box>
        </>
        



    );

}

export default Navbar;