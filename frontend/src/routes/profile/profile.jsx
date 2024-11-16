import './profile.css';
import { Flex, Box} from "@chakra-ui/react";
import BlackScreenFadeIn from '../../components/global/transitionFadeIn';
import usePageTransition from '../../components/global/usePageTransition';
import Navbar from '../../components/Navbar/navbar';
function Profile() {
  const { isPageLoading } = usePageTransition();

  return (
    <>
      {isPageLoading && <BlackScreenFadeIn />}
      
      <Flex className='home' direction="column" height="100vh">
        <Navbar/>
        <Box flex="1" p={8} alignContent='center' justifyItems='center'>
            User Profile
        </Box>
      </Flex>
    </>
    
  );
}

export default Profile;
