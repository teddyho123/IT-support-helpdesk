import './forgotPassword.css';
import { RiArrowLeftLine } from "react-icons/ri";
import { Button, Input, Fieldset, HStack, Flex } from "@chakra-ui/react";
import { Field } from "../../components/ui/field"
import BlackScreenScaleIn from '../../components/global/transitionScaleIn';
import BlackScreenScaleOut from '../../components/global/transitionScaleOut';
import usePageTransition from '../../components/global/usePageTransition';


function ForgotPassword() {
    const { isPageLoading, isTransitioning, handleNavigate, handleBack } = usePageTransition();

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
                            <h1 className="title">Oopsies</h1>
                            <p className='description'>An email will be sent to your email address to reset your password</p>
                        </div>
                        <Fieldset.Root size="lg" maxW="md">
                            <Fieldset.Content className='form'>
                                <Field required paddingTop='200px' label="Email Address"><Input user_id="user_id"/></Field>
                                <Button className="btn" type="submit" colorPalette='blue' variant='subtle' alignSelf="center">Reset Password</Button>   
                            </Fieldset.Content>
                        </Fieldset.Root>
                        <Button className="btn2" colorPalette={'pink'} variant='ghost' onClick={handleBack}><RiArrowLeftLine />GO BACK</Button>
                    </header>
                </div>
            </Flex>
        </>
        
      
    );
  }
  
  export default ForgotPassword;
  