import './home.css';
import { Box, Grid, GridItem } from "@chakra-ui/react";
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

      <Box className="home" height="100vh">
        <Navbar />

        {/* Main Content */}
        <Grid templateColumns={{ base: "1fr", md: "250px 1fr" }} gap={4} p={8} h="calc(100vh - 64px)" maxW="100%">
          {/* Left Sidebar - Filter */}
          <GridItem>
            <DecorativeBox>Filter</DecorativeBox>
          </GridItem>

          {/* Right Section (Grid Layout) */}
          <Grid templateColumns="repeat(6, 1fr)" templateRows="auto 1fr" gap={4} h="100%" maxW="100%">
            {/* Top Row: Deadlines & Announcements */}
            <GridItem colSpan={3}>
              <DecorativeBox>Closest Deadline</DecorativeBox>
            </GridItem>
            <GridItem colSpan={3}>
              <DecorativeBox>Announcements</DecorativeBox>
            </GridItem>

            {/* Your Queue - Expands to Fill Remaining Space */}
            <GridItem colSpan={6} h="100%">
              <DecorativeBox h="100%" overflowY="auto">
                Your Queue
                <TaskList />
              </DecorativeBox>
            </GridItem>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Home;
