// Link to the tutorial
// https://dev.to/joserfelix/page-transitions-in-react-1c8g
import { motion } from "framer-motion";
function Homeinit() {
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

}

export default Homeinit




