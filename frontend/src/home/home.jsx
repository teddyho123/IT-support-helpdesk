import gear from '../assets/gear.png';
import './home.css';
import { Link } from 'react-router-dom';
import { HStack, Button } from "@chakra-ui/react";
import { RiArrowRightLine } from "react-icons/ri";
import { IoIosLogIn } from "react-icons/io";
import { FaUserEdit } from "react-icons/fa";
import { motion } from "framer-motion";
import Homeinit from './homeinit';

function Home() {
  const blackBox = {
    initial: {
        height: "100vh",
    },
  };
// For creating a black blank page with PrioQue in the middle when first loaded in
const InitialTransition = () => {
    return (
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="relative z-50 w-full bg-black"
            initial="initial"
            animate="animate"
            variants={blackBox}
          />      
        </div>
    );
  }; 
  return (
    <motion.div exit={{ opacity: 0 }}>
      <div className="home">
        <header className="home-header">
          <div>
            <h1 className="title"> Welcome to PrioQue</h1>
            <p className="description">Your task organizing solution</p>
          </div>
          <img src={gear} className="home-logo" alt="logo" />
          <HStack>
            <div>
              <Button className="btn" colorPalette={'cyan'} variant='outline'>LOG IN <IoIosLogIn /></Button>
              <Button className="btn" colorPalette={'green'} variant='outline'>SIGN UP <FaUserEdit /></Button>
            </div>
          </HStack>
          <Link to="/aboutus">
            <Button className="btn2" colorPalette={'purple'} variant='ghost'>ABOUT US <RiArrowRightLine /></Button>
          </Link>
        </header>
      </div>
    </motion.div> 
    
  );
}

export default Home;
