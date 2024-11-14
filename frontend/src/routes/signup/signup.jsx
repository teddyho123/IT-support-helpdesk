import './signup.css';
import { RiArrowLeftLine } from "react-icons/ri";
import { Button, Input, Fieldset, HStack, Flex } from "@chakra-ui/react";
import { Field } from "../../components/ui/field"
import BlackScreenScaleIn from '../../components/global/transitionScaleIn';
import BlackScreenScaleOut from '../../components/global/transitionScaleOut';
import usePageTransition from '../../components/global/usePageTransition';

function Signup() {
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
                            <h1 className="title">Create An Account</h1>
                        </div>

                        <Fieldset.Root size="lg" maxW="md">
                            <Fieldset.Content className='form'>
                                <Field required paddingTop='200px' label="Username"><Input username="username"/><Fieldset.HelperText className='helper'>This will be the username shown</Fieldset.HelperText></Field>
                                <Field required label="Email Address"><Input user_id="user_id"/><Fieldset.HelperText className='helper'>This is what you will use to log in, and your user ID</Fieldset.HelperText></Field>
                                <Field required label="Password"><Input user_password="user_password"/><Fieldset.HelperText className='helper'>Must be at least 8 characters long</Fieldset.HelperText></Field>
                                <Button className="btn" type="submit" colorPalette='green' variant='subtle' alignSelf="center">Sign Up!</Button>
                            </Fieldset.Content>
                        </Fieldset.Root>
                        <Button className="btn2" colorPalette={'pink'} variant='ghost' onClick={handleBack}><RiArrowLeftLine />GO BACK</Button>
                    </header>
                </div>
            </Flex>
        </>
        
      
    );
  }
  
  export default Signup;
  