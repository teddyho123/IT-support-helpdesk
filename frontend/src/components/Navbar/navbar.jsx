import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react";
import { CiLogout } from "react-icons/ci";
import usePageTransition from '../../components/global/usePageTransition';
import BlackScreenFadeOut from '../../components/global/transitionFadeOut';
import { TiThMenuOutline } from "react-icons/ti";
import {
    MenuContent,
    MenuItem,
    MenuRoot,
    MenuTrigger,
  } from "../../components/ui/menu"
  import { IoHomeOutline } from "react-icons/io5";
  import { FaTasks } from "react-icons/fa";
  import { CgProfile } from "react-icons/cg";
  import { IoMdSettings } from "react-icons/io";
function Navbar() {
    const { handleNavigate, isTransitioning } = usePageTransition();


    return (
        <>
            {isTransitioning && <BlackScreenFadeOut />}
            <Box width="100%" bg="bg" shadow="md" p={4}>
                <Flex gap="10" alignItems="center" justifyContent="center">
                <MenuRoot>
                    <MenuTrigger asChild>
                        <Button marginEnd="auto" variant="ghost" size="sm">
                            <TiThMenuOutline/>Menu
                        </Button>
                    </MenuTrigger>
                    <MenuContent>
                        <MenuItem value="home"><IoHomeOutline />Home</MenuItem>
                        <MenuItem value="your_tasks"><FaTasks />Your Tasks</MenuItem>
                        <MenuItem value="profile"><CgProfile />Profile</MenuItem>
                        <MenuItem value="settings"><IoMdSettings />Settings</MenuItem>
                    </MenuContent>
                </MenuRoot>
                    <Box marginEnd="auto" position="absolute"><Text fontWeight="extrabold" fontSize="4xl" fontFamily={"-apple-system, BlinkMacSystemFont, sans-serif"}>PrioQue</Text></Box>
                    <Button variant='ghost' onClick={() => handleNavigate('/')}>
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