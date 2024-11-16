import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react";
import { CiLogout } from "react-icons/ci";
import usePageTransition from '../../components/global/usePageTransition';
import BlackScreenFadeOut from '../../components/global/transitionFadeOut';
import { Avatar } from "../../components/ui/avatar"
import Menu from "./menu";
function Navbar() {
    const { handleNavigate, isTransitioning } = usePageTransition();
    
    return (
        <>
            {isTransitioning && <BlackScreenFadeOut />}
            <Box width="100%" bg="bg" shadow="md" p={4}>
                <Flex gap="10" alignItems="center" justifyContent="center">
                    <Menu/>
                    <Box marginEnd="auto" position="absolute"><Text fontWeight="extrabold" fontSize="4xl" fontFamily={"-apple-system, BlinkMacSystemFont, sans-serif"}>PrioQue</Text></Box>
                    <Avatar variant="outline" name="Teddy Ho" />
                    <Button paddingLeft="0" variant='ghost' onClick={() => handleNavigate('/')}>
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