import './home.css';
import { Button, Flex, Box} from "@chakra-ui/react";
import { EmptyState } from "../../components/ui/empty-state"
import { MdOutlineLibraryAdd } from "react-icons/md";
import BlackScreenFadeIn from '../../components/global/transitionFadeIn';
import usePageTransition from '../../components/global/usePageTransition';
import Navbar from '../../components/Navbar/navbar';
function Home() {
  const { isPageLoading } = usePageTransition();

  return (
    <>
      {isPageLoading && <BlackScreenFadeIn />}
      
      <Flex className='home' direction="column" height="100vh">
        <Navbar/>
        <Box flex="1" p={8} alignContent='center' justifyItems='center'>
          <EmptyState
            icon={<MdOutlineLibraryAdd color="darkgray"/>}
            title="Your queue is empty!"
            description="Add new tasks to get busy"
          >
            <Button>Create Task</Button>
          </EmptyState>
        </Box>
      </Flex>
    </>
    
  );
}

export default Home;
