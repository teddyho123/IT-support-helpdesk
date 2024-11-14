import './login.css';
import { RiArrowLeftLine } from "react-icons/ri";
import { Button, Input, Fieldset, HStack, Flex } from "@chakra-ui/react";
import { Field } from "../../components/ui/field"
import BlackScreenScaleIn from '../../components/global/transitionScaleIn';
import BlackScreenScaleOut from '../../components/global/transitionScaleOut';
import usePageTransition from '../../components/global/usePageTransition';
import prevPage from '../../components/global/previousPage';

function Login() {
    const { isPageLoading, isTransitioning, handleNavigate } = usePageTransition();

    return (
        <>
            {isPageLoading && <BlackScreenScaleIn />}
            {isTransitioning && <BlackScreenScaleOut />}
            <Flex
                direction="column"
                minH="90vh"
                justifyContent="space-between"
                alignItems="center"
                >
                <div className="home">
                    <header className="home-header">
                        <div>
                            <h1 className="title">Welcome Back!</h1>
                        </div>

                        <Fieldset.Root size="lg" maxW="md">
                            <Fieldset.Content>
                                <Field paddingTop='100px' label="User ID"><Input user_id="user_id"/></Field>
                                <Field label="Password"><Input user_password="user_password"/></Field>
                                <Button className="btn" type="submit" colorPalette='blue' variant='subtle' alignSelf="center">Log In</Button>   
                                <HStack alignSelf="center" >
                                    <Button className="btn" colorPalette='white' variant='outline' alignSelf="flex-start">Forgot Password?</Button>
                                    <Button className="btn" colorPalette='whiteAlpha' variant='outline' alignSelf="flex-start" onClick={() => handleNavigate('/signup')}>New User?</Button>                            
                                </HStack>
                            </Fieldset.Content>
                        </Fieldset.Root>
                        <Button className="btn2" colorPalette={'pink'} variant='ghost' onClick={prevPage()}><RiArrowLeftLine />TAKE ME BACK</Button>
                    </header>
                </div>
            </Flex>
        </>
        
      
    );
  }
  
  export default Login;
  