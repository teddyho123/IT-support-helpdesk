import gear from '../assets/gear.png';
import './home.css';
import { HStack, Button } from "@chakra-ui/react";
import { RiArrowRightLine } from "react-icons/ri";
import { IoIosLogIn } from "react-icons/io";
import { FaUserEdit } from "react-icons/fa";

function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <div>
          <h1 className="title"> Welcome to PrioQue </h1>
          <p className="description">Your task organizing solution</p>
        </div>
        <img src={gear} className="home-logo" alt="logo" />
        <HStack>
          <div>
            <Button className="btn" colorPalette={'cyan'} variant='outline'>LOG IN <IoIosLogIn /></Button>
            <Button className="btn" colorPalette={'green'} variant='outline'>SIGN UP <FaUserEdit /></Button>
          </div>
        </HStack>
        <Button className="btn2" colorPalette={'purple'} variant='ghost'>ABOUT US <RiArrowRightLine /></Button>
      </header>
    </div>
  );
}

export default Home;
