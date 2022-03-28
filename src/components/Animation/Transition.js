import React from 'react';
import {AnimatePresence, motion} from "framer-motion";

function Page_transition(props) {
  
  return (
    <motion.div  
    initial={{scaleY:0.8,scaleX:0.8,originY:"50vh",originX:"1000vw",times:1}}
    animate={{scaleX:[0.8,0.8,1],scaleY:[0.8,0.8,1],originX:["500vw","76vw","50vw"]}} 
    exit={{x:["0vw","0vw","-100vw"],originY:"50vh",scaleY:0.8,scaleX:0.8}}
    transition={{duration:1,times:[0,0.5,1]}} 
    >
      {props.children}
    </motion.div>
  );
}

export default Page_transition;
