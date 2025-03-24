import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    const synth = window.speechSynthesis;

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      console.log("User said: " + transcript);
      const utterance = new SpeechSynthesisUtterance("You said: " + transcript);
      synth.speak(utterance);
    };

    recognition.start();

    return () => {
      recognition.stop();
    };
  }, []);

  return (
    <div className="chatbot">
      <p>Start talking...</p>
    </div>
  );
};

export default Chatbot;
