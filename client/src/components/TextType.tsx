import React, { useState, useEffect } from 'react';

interface TextTypeProps {
  text: string[];
  typingSpeed?: number;
  pauseDuration?: number;
  showCursor?: boolean;
  cursorCharacter?: string;
  className?: string;
}

const TextType: React.FC<TextTypeProps> = ({
  text,
  typingSpeed = 75,
  pauseDuration = 1500,
  showCursor = true,
  cursorCharacter = "|",
  className = ""
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (text.length === 0) return;

    let timeout: NodeJS.Timeout;

    if (isTyping) {
      // Typing phase
      if (currentCharIndex < text[currentTextIndex].length) {
        timeout = setTimeout(() => {
          setDisplayText(text[currentTextIndex].slice(0, currentCharIndex + 1));
          setCurrentCharIndex(currentCharIndex + 1);
        }, typingSpeed);
      } else {
        // Finished typing current text
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, pauseDuration);
      }
    } else {
      // Deleting phase
      if (currentCharIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText(text[currentTextIndex].slice(0, currentCharIndex - 1));
          setCurrentCharIndex(currentCharIndex - 1);
        }, typingSpeed / 2); // Faster deletion
      } else {
        // Move to next text
        setCurrentTextIndex((prev) => (prev + 1) % text.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentTextIndex, currentCharIndex, isTyping, text, typingSpeed, pauseDuration]);

  return (
    <span className={className}>
      {displayText}
      {showCursor && (
        <span className="animate-pulse text-inherit">
          {cursorCharacter}
        </span>
      )}
    </span>
  );
};

export default TextType; 