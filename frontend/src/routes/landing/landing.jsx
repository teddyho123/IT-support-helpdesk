import gear from '../../assets/gear.png';
import './landing.css';
import { HStack, Button, Flex} from "@chakra-ui/react";
import { RiArrowRightLine } from "react-icons/ri";
import { IoIosLogIn } from "react-icons/io";
import { FaUserEdit } from "react-icons/fa";
import BlackScreenIn from '../../components/global/transitionIn';
import BlackScreenOut from '../../components/global/transitionOut';
import usePageTransition from '../../components/global/usePageTransition';

function Landing() {
  const { isPageLoading, isTransitioning, handleNavigate } = usePageTransition();

  return (
    <>
      {isPageLoading && <BlackScreenIn />}
      {isTransitioning && <BlackScreenOut />}
      <Flex
            direction="column"
            minH="100vh"
            justifyContent="space-between"
            alignItems="center"
            >
            <div className="home">
              <header className="home-header">
                <div>
                  <h1 className="title"> Welcome to PrioQue</h1>
                  <p className="description">Your task organizing solution</p>
                </div>
                <img src={gear} className="home-logo" alt="logo" />
                <HStack>
                  <div>
                    <Button className="btn" colorPalette={'cyan'} variant='outline' onClick={() => handleNavigate('/login')}>LOG IN <IoIosLogIn /></Button>
                    <Button className="btn" colorPalette={'green'} variant='outline' onClick={() => handleNavigate('/signup')}>SIGN UP <FaUserEdit /></Button>
                  </div>
                </HStack>
                <Button className="btn2" colorPalette={'purple'} variant='ghost' onClick={() => handleNavigate('/aboutus')}>ABOUT US <RiArrowRightLine /></Button>
              </header>
            </div>
      </Flex>

      
      
      
    </>
  );
}

export default Landing;
