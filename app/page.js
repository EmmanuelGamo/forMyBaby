"use client";

import { useState, useEffect, useRef } from "react";
import Confetti from "react-confetti";
import HeartCollage from "./HeartCollage";

export default function Valentine() {
  const [response, setResponse] = useState(null);
  const [isCelebrating, setIsCelebrating] = useState(false);
  const [showHeartCollage, setShowHeartCollage] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [gifSrc, setGifSrc] = useState("/harot.gif");
  const [showNoButton, setShowNoButton] = useState(true);
  const [showYesButton, setShowYesButton] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleYesClick = () => {
    setShowHeartCollage(true);
    if (audioRef.current) {
      audioRef.current.play();
    }
    setTimeout(() => {
      setResponse("Happy Valentine's Day, baby! Date tayo after ng class mo. I love you baby! 🤭");
      setIsCelebrating(true);
      setGifSrc("/kilig.gif");
      setShowNoButton(false);
      setShowYesButton(false);
      setShowPopup(false);
    }, 2000);
  };

  const handleNoHover = () => {
    setIsHovered(true);
    setShowPopup(true);
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 150);
    setNoButtonPosition({ x, y });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 relative font-romance">
      <audio ref={audioRef} src="/BeWithYou.mp3" preload="auto" />
      {isCelebrating && <Confetti />}

      {showHeartCollage && <HeartCollage />}

      {isCelebrating && (
        <div className="text-center mt-4">
          <p className="text-3xl text-red-500 font-romance animate-pulse drop-shadow-lg">
            {response}
          </p>
          <img src={gifSrc} alt="kilig" className="w-48 h-48 shadow-lg mx-auto mt-4" />
        </div>
      )}

      {!isCelebrating && !showHeartCollage && (
        <>
          <h1 className="text-5xl font-romance text-red-600 mb-8 drop-shadow-lg">
            Will You Be My Valentine?
          </h1>
          <img src={gifSrc} alt="harot" className="w-48 h-48 shadow-lg border-4 border-red-300" />
        </>
      )}

      {!isCelebrating && (
        <div className="flex space-x-6 mt-6">
          {showYesButton && (
            <button
              className="px-8 py-4 bg-green-500 text-white text-xl font-romance rounded-full shadow-lg hover:bg-green-600 transition duration-300 transform hover:scale-105"
              onClick={handleYesClick}
            >
              Yes ❤️
            </button>
          )}

          {showNoButton && (
            <button
              className="px-8 py-4 bg-red-500 text-white text-xl font-romance rounded-full shadow-lg hover:bg-red-600 transition duration-300 transform hover:scale-105"
              style={
                isHovered
                  ? {
                      position: "absolute",
                      left: `${noButtonPosition.x}px`,
                      top: `${noButtonPosition.y}px`,
                    }
                  : {}
              }
              onMouseEnter={handleNoHover}
              aria-label="No"
            >
              No 😢
            </button>
          )}
        </div>
      )}

      {showPopup && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg text-xl font-romance">
          Bawal ka mag no baby! 😾
        </div>
      )}
    </div>
  );
}
