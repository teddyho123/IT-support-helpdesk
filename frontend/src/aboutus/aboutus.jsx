import './aboutus.css';
import { RiArrowLeftLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { Button, List } from "@chakra-ui/react";
import { motion } from "framer-motion";


function Aboutus() {
    return (
        <motion.div exit={{ opacity: 0 }}>
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
                <Link to="/">
                    <Button className="btn2" colorPalette={'purple'} variant='ghost'><RiArrowLeftLine />TAKE ME BACK</Button>
                </Link>
                
                </header>
            </div>
        </motion.div>
      
    );
  }
  
  export default Aboutus;
  