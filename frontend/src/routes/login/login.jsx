import './login.css';
import { RiArrowLeftLine } from "react-icons/ri";
import { Button, List } from "@chakra-ui/react";
import BlackScreenScaleIn from '../../components/global/transitionScaleIn';
import BlackScreenScaleOut from '../../components/global/transitionScaleOut';
import usePageTransition from '../../components/global/usePageTransition';

function Login() {
    const { isPageLoading, isTransitioning, handleNavigate } = usePageTransition();

    return (
      <>
        {isPageLoading && <BlackScreenScaleIn />}
        {isTransitioning && <BlackScreenScaleOut />}
            <div className="home">
                <header className="home-header">
                    <div>
                        <h1 className="title">Login Page</h1>
                    </div>
                    <Button className="btn2" colorPalette={'pink'} variant='ghost' onClick={() => handleNavigate('/')}><RiArrowLeftLine />TAKE ME BACK</Button>
                </header>
            </div>
        </>
        
      
    );
  }
  
  export default Login;
  