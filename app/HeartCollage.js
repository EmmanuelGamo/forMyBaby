"use client";

import { useState, useEffect } from "react";

const HeartCollage = () => {
  const imageList = [
    "/images/1.jpg", "/images/2.jpg", "/images/3.jpg",  "/images/4.jpg", "/images/5.jpg", "/images/6.jpg", "/images/7.jpg",
    "/images/8.jpg", "/images/9.jpg", "/images/10.jpg", "/images/11.jpg", "/images/12.jpg", "/images/13.jpg", "/images/14.jpg", 
    "/images/15.jpg", "/images/16.jpg", "/images/17.jpg", "/images/18.jpg", "/images/19.jpg", "/images/20.jpg", "/images/21.jpg",
    "/images/22.jpg", "/images/23.jpg", "/images/24.jpg", "/images/25.jpg", "/images/26.jpg", "/images/27.jpg",  "/images/28.jpg",
    "/images/29.jpg", "/images/30.jpg",  "/images/31.jpg", "/images/32.jpg", "/images/33.jpg", "/images/34.jpg", "/images/35.jpg",
     "/images/36.jpg","/images/37.jpg",  "/images/38.jpg","/images/39.jpg",
    
  ];

  const heartGrid = [
    [0, 1, 1, 0, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
  ];

  const [visibleImages, setVisibleImages] = useState([]);

  useEffect(() => {
    let timeouts = [];
    imageList.forEach((image, index) => {
      const timeout = setTimeout(() => {
        setVisibleImages((prev) => [...prev, image]);
      }, index * 300);
      timeouts.push(timeout);
    });
    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-100">
      <div className="grid grid-cols-7 gap-1">
        {heartGrid.flat().map((cell, index) => (
          cell === 1 && visibleImages[index] ? (
            <img
              key={index}
              src={visibleImages[index]}
              alt={`Collage ${index + 1}`}
              className="w-16 h-16 object-cover rounded-lg opacity-0 animate-fadeIn"
            />
          ) : (
            <div key={index} className="w-16 h-16"></div>
          )
        ))}
      </div>
    </div>
  );
};

export default HeartCollage;
