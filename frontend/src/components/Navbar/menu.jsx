import { Button} from "@chakra-ui/react";
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
import BlackScreenFadeOut from '../../components/global/transitionFadeOut';
import { useLocation } from 'react-router-dom'; // Import useLocation
import usePageTransition from "../global/usePageTransition";
function Menu() {
    const { handleNavigate, isTransitioning } = usePageTransition();
    const location = useLocation();
    const currentPath = location.pathname;
    
    return (
        <>
            {isTransitioning && <BlackScreenFadeOut />}
            <MenuRoot>
                <MenuTrigger asChild>
                    <Button marginEnd="auto" variant="ghost" size="sm">
                        <TiThMenuOutline/>Menu
                    </Button>
                </MenuTrigger>
                <MenuContent>
                    <MenuItem value="home" onClick={currentPath === '/home' ? undefined : () => handleNavigate('/home')} disabled={currentPath === '/home'}><IoHomeOutline />Home</MenuItem>
                    <MenuItem value="your_tasks" onClick={currentPath === '/tasks' ? undefined : () => handleNavigate('/tasks')} disabled={currentPath === '/tasks'}><FaTasks />Your Tasks</MenuItem>
                    <MenuItem value="settings" onClick={currentPath === '/settings' ? undefined : () => handleNavigate('/settings')} disabled={currentPath === '/settings'}><IoMdSettings />Settings</MenuItem>
                    <MenuItem value="profile" onClick={currentPath === '/profile' ? undefined : () => handleNavigate('/profile')} disabled={currentPath === '/profile'}><CgProfile />Profile</MenuItem>
                </MenuContent>
            </MenuRoot>
        </>
    );
}

export default Menu;