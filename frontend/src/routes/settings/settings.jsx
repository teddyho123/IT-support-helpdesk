import './settings.css';
import { Box, Flex, Text, Separator } from "@chakra-ui/react";
import BlackScreenFadeIn from '../../components/global/transitionFadeIn';
import usePageTransition from '../../components/global/usePageTransition';
import Navbar from '../../components/Navbar/navbar';
import DeleteAccount from './deleteAccount';
import LightTheme from './lightTheme';
import MuteAlert from './muteAlerts';
import ProfileVisibility from './profileVisibility';

// .title {
//   left: 50%;
//   font-family: -apple-system, BlinkMacSystemFont, sans-serif;
//   font-size: 30px;
//   background: -webkit-linear-gradient(#eee, #333);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   opacity: 0;
//   transition: opacity 1.5s ease-in;
//   animation: title_fadeIn 1.5s ease-in forwards;
//   animation-delay: 0.5s;
// }

function Settings() {
  const { isPageLoading } = usePageTransition();

  return (
    <>
      {isPageLoading && <BlackScreenFadeIn />}
      <Flex className='home' direction="column" height="100vh">
        <Navbar/>
        <Box flex="1" p={8} alignContent='flex-start' justifyItems='center'>
          <Text marginTop="30px" marginBottom="50px"  fontFamily={"-apple-system, BlinkMacSystemFont, sans-serif"}>Settings</Text>
          <LightTheme/>
          <Separator margin="30px"/>
          <MuteAlert/>
          <Separator margin="30px"/>
          <ProfileVisibility/>
          <DeleteAccount/>
        </Box>
      </Flex>
    </>
    
  );
}

export default Settings;
