
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TypingName = () => {
  const phrases = [
    "Gautam Shende",
    "MERN Stack Developer",
    "Frontend Developer",
    "Backend Developer"
  ];
  
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  
  const typingSpeed = 200;        
  const deletingSpeed = 60;      
  const pauseDuration = 2000;    

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    
    if (isWaiting) {
      const waitTimer = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, pauseDuration);
      
      return () => clearTimeout(waitTimer);
    }
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentPhrase.length) {
          setDisplayedText(currentPhrase.substring(0, displayedText.length + 1));
        } else {

          setIsWaiting(true);
        }
      } else {

        if (displayedText.length > 0) {
          setDisplayedText(displayedText.substring(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);
    
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, isWaiting, currentPhraseIndex, phrases]);

  return (
    <span className="inline-flex items-center">
      <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-500 bg-clip-text text-transparent">
        {displayedText}
      </span>
      
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="inline-block w-0.5 h-8 ml-1 bg-gradient-to-r from-violet-600 to-fuchsia-600"
      >
      </motion.span>
    </span>
  );
};

export default TypingName;