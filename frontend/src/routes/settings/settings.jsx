import './settings.css';
import { Button, Flex, Box} from "@chakra-ui/react";
import BlackScreenFadeIn from '../../components/global/transitionFadeIn';
import usePageTransition from '../../components/global/usePageTransition';
import Navbar from '../../components/Navbar/navbar';
function Settings() {
  const { isPageLoading } = usePageTransition();

  return (
    <>
      {isPageLoading && <BlackScreenFadeIn />}
      
      <Flex className='home' direction="column" height="100vh">
        <Navbar/>
        <Box flex="1" p={8} alignContent='center' justifyItems='center'>
            <Button>Setting</Button>
        </Box>
      </Flex>
    </>
    
  );
}

export default Settings;
