import React, { useRef } from "react";
import { useAnimationFrame } from "motion/react";

const containerStyle = {
    perspective: "800px",
    width: "400px",
    height: "400px",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

const cubeStyle = {
  width: "200px",
  height: "200px",
  position: "relative",
  transformStyle: "preserve-3d",
};

const sideStyle = {
  position: "absolute",
  width: "100%",
  height: "100%",
  opacity: 0.6,
};

const frontStyle = {
  ...sideStyle,
  transform: "rotateY(0deg) translateZ(100px)",
  backgroundColor: "red",
};

const rightStyle = {
  ...sideStyle,
  transform: "rotateY(90deg) translateZ(100px)",
  backgroundColor: "green",
};

const backStyle = {
  ...sideStyle,
  transform: "rotateY(180deg) translateZ(100px)",
  backgroundColor: "yellow",
};

const leftStyle = {
  ...sideStyle,
  transform: "rotateY(-90deg) translateZ(100px)",
  backgroundColor: "blue",
};

const topStyle = {
  ...sideStyle,
  transform: "rotateX(90deg) translateZ(100px)",
  backgroundColor: "purple",

};

const bottomStyle = {
  ...sideStyle,
  transform: "rotateX(-90deg) translateZ(100px)",
  backgroundColor: "orange",
};

export default function UseAnimationFrame() {
  const ref = useRef(null);

  useAnimationFrame((t) => {
    if (!ref.current) return;

    const rotate = Math.sin(t / 8000) * 250;
    const y = (1 + Math.sin(t / 800)) * -50;
    ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });

  return (
    <div style={containerStyle}>
      <div className="cube" ref={ref} style={cubeStyle}>
        <div className="side front" style={frontStyle} />
        <div className="side left" style={leftStyle} />
        <div className="side right" style={rightStyle} />
        <div className="side top" style={topStyle} />
        <div className="side bottom" style={bottomStyle} />
        <div className="side back" style={backStyle} />
      </div>
    </div>
  );
}