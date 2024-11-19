import './home.css';
import { Flex, Box, GridItem, Grid } from "@chakra-ui/react";
import BlackScreenFadeIn from '../../components/global/transitionFadeIn';
import usePageTransition from '../../components/global/usePageTransition';
import Navbar from '../../components/Navbar/navbar';
import DecorativeBox from './decorativeBox';
import TaskList from './taskList';
function Home() {
  const { isPageLoading } = usePageTransition();

  return (
    <>
      {isPageLoading && <BlackScreenFadeIn />}
      
      <Flex className='home' direction="column" height="100vh">
        <Navbar/>
        <Box flex="1" p={8} alignContent='flex-start' justifyItems='flex-start'>
        <Grid w="100%" h="80%" templateRows="repeat(4, 1fr)" templateColumns="repeat(8, 1fr)" gap={4}>
          <GridItem rowSpan={25} colSpan={2}>
            <DecorativeBox>Filter</DecorativeBox>
          </GridItem>
          <GridItem colSpan={3}>
            <DecorativeBox>Closest Deadline</DecorativeBox>
          </GridItem>
          <GridItem colSpan={3}>
            <DecorativeBox>Announcements</DecorativeBox>
          </GridItem>
          <GridItem rowSpan={20} colSpan={6}>
            <DecorativeBox>
                Your Queue
                <TaskList/>
            </DecorativeBox>
          </GridItem>
        </Grid>

        </Box>
      </Flex>
    </>
    
  );
}

export default Home;
