import './home.css';
import { Flex, Box, GridItem, Grid } from "@chakra-ui/react";
import BlackScreenFadeIn from '../../components/global/transitionFadeIn';
import usePageTransition from '../../components/global/usePageTransition';
import Navbar from '../../components/Navbar/navbar';
import HomeEmptyState from './homeEmptyState';
import DecorativeBox from './decorativeBox';
function Home() {
  const { isPageLoading } = usePageTransition();

  return (
    <>
      {isPageLoading && <BlackScreenFadeIn />}
      
      <Flex className='home' direction="column" height="100vh">
        <Navbar/>
        <Box flex="1" p={8} alignContent='flex-start' justifyItems='flex-start'>
        <Grid h="200px" templateRows="repeat(2, 1fr)" templateColumns="repeat(5, 1fr)" gap={4}>
          <GridItem rowSpan={2} colSpan={1}>
            <DecorativeBox>rowSpan=2</DecorativeBox>
          </GridItem>
          <GridItem colSpan={2}>
            <DecorativeBox>colSpan=2</DecorativeBox>
          </GridItem>
          <GridItem colSpan={2}>
            <DecorativeBox>colSpan=2</DecorativeBox>
          </GridItem>
          <GridItem colSpan={4}>
            <DecorativeBox>colSpan=4</DecorativeBox>
          </GridItem>
        </Grid>


          <HomeEmptyState/>



        </Box>
      </Flex>
    </>
    
  );
}

export default Home;
