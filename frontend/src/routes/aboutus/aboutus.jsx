import './aboutus.css';
import { RiArrowLeftLine } from "react-icons/ri";
import { Button, List, Flex } from "@chakra-ui/react";
import BlackScreenIn from '../../components/global/transitionIn';
import BlackScreenOut from '../../components/global/transitionOut';
import usePageTransition from '../../components/global/usePageTransition';
import { GrSystem } from "react-icons/gr";
import { DiStreamline } from "react-icons/di";
import { MdLowPriority } from "react-icons/md";
import { CiSignpostDuo1 } from "react-icons/ci";
import { IoSpeedometerOutline } from "react-icons/io5";
import { LuPaintBucket } from "react-icons/lu";
function Aboutus() {
    const { isPageLoading, isTransitioning, handleBack } = usePageTransition();

    return (
        <>
            {isPageLoading && <BlackScreenIn />}
            {isTransitioning && <BlackScreenOut />}
            <Flex direction="column" minH="90vh" justifyContent="space-between" alignItems="center">
                <div className="home">
                    <header className="home-header">
                        <div>
                            <h1 className="title">Why Use PrioQue?</h1>
                        </div>
                        <List.Root gap="5" variant="plain" color="gray">
                            <List.Item ><GrSystem /> A powerful priority queue ticketing system</List.Item>
                            <List.Item ><DiStreamline /> Streamline issue management and boost team efficiency</List.Item>
                            <List.Item ><MdLowPriority /> Helps support teams prioritize urgent tickets</List.Item>
                            <List.Item ><CiSignpostDuo1 /> Collaborate in real-time</List.Item>
                            <List.Item ><IoSpeedometerOutline /> Improve response times</List.Item>
                            <List.Item ><LuPaintBucket /> User-friendly interface</List.Item>
                        </List.Root>
                        <Button className="btn2" colorPalette={'pink'} variant='ghost' onClick={handleBack}><RiArrowLeftLine />GO BACK</Button>
                    </header>
                </div>
            </Flex>
        </>
        
      
    );
  }
  
  export default Aboutus;
  