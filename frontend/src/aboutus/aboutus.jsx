import './aboutus.css';
import { RiArrowLeftLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { Button, List } from "@chakra-ui/react";
import { motion } from "framer-motion";
import BlackScreenIn from '../components/global/transitionIn';
import BlackScreenOut from '../components/global/transitionOut';
import usePageTransition from '../components/global/usePageTransition';


function Aboutus() {
    const { isPageLoading, isTransitioning, handleNavigate } = usePageTransition();

    return (
      <>
        {isPageLoading && <BlackScreenIn />}
        {isTransitioning && <BlackScreenOut />}
            <div className="home">
                <header className="home-header">
                    <div>
                        <h1 className="title">Why use PrioQue?</h1>
                    </div>
                    <List.Root gap="5" variant="plain" color="gray">
                        <List.Item >A powerful priority queue ticketing system</List.Item>
                        <List.Item >Streamline issue management and boost team efficiency</List.Item>
                        <List.Item >Helps support teams prioritize urgent tickets</List.Item>
                        <List.Item >Collaborate in real-time</List.Item>
                        <List.Item >Improve response times</List.Item>
                        <List.Item >User-friendly interface</List.Item>
                    </List.Root>
                    <Button className="btn2" colorPalette={'pink'} variant='ghost' onClick={() => handleNavigate('/')}><RiArrowLeftLine />TAKE ME BACK</Button>
                </header>
            </div>
        </>
        
      
    );
  }
  
  export default Aboutus;
  