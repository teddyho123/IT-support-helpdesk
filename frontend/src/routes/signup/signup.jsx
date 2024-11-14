import './signup.css';
import { RiArrowLeftLine } from "react-icons/ri";
import { Button, List, Flex } from "@chakra-ui/react";
import BlackScreenScaleIn from '../../components/global/transitionScaleIn';
import BlackScreenScaleOut from '../../components/global/transitionScaleOut';
import usePageTransition from '../../components/global/usePageTransition';
import prevPage from '../../components/global/previousPage';
function Signup() {
    const { isPageLoading, isTransitioning, handleNavigate } = usePageTransition();

    return (
      <>
        {isPageLoading && <BlackScreenScaleIn />}
        {isTransitioning && <BlackScreenScaleOut />}
        <Flex
            direction="column"
            minH="100vh"
            justifyContent="space-between"
            alignItems="center"
            >
                <div className="home">
                    <header className="home-header">
                        <div>
                            <h1 className="title">Create A New Account</h1>
                        </div>
                        <Button justifySelf='flex-end' className="btn2" colorPalette={'pink'} variant='ghost' onClick={prevPage()}><RiArrowLeftLine />TAKE ME BACK</Button>
                    </header>
                </div>
            </Flex>
        </>
        
      
    );
  }
  
  export default Signup;
  