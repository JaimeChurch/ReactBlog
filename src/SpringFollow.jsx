import React, { useEffect, useRef } from "react";
import { frame, motion, useMotionValue, useSpring } from "motion/react";

const spring = { damping: 3, stiffness: 30, restDelta: 0.001 };

const ball = {
    width: 65,
    height: 65,
    backgroundColor: "#F9DC5C",
    borderRadius: "50%",
    boxShadow: "3px 3px 4px rgba(0, 0, 0, 0.5)",
    position: "relative",
};

const eye = {
    content: '""',
    width: "10px",
    height: "15px",
    backgroundColor: "#000",
    borderRadius: "50%",
    position: "absolute",
    top: "25%",
};

const leftEye = {
    ...eye,
    left: "25%",
};

const rightEye = {
    ...eye,
    right: "25%",
};

const mouth = {
    width: "50%",
    height: "25%",
    borderBottom: "10px solid #000",
    borderRadius: "0 0 50% 50%",
    position: "absolute",
    bottom: "20%",
    left: "50%",
    transform: "translateX(-50%)",
};

export function useFollowPointer(ref) {
    const xPoint = useMotionValue(0);
    const yPoint = useMotionValue(0);
    const x = useSpring(xPoint, spring);
    const y = useSpring(yPoint, spring);

    useEffect(() => {
        if (!ref.current) return;
    
        const handlePointerMove = ({ clientX, clientY }) => {
          const element = ref.current;
    
          frame.read(() => {
            const newX = clientX - element.offsetLeft - element.offsetWidth / 2 + window.scrollX;
            const newY = clientY - element.offsetTop - element.offsetHeight / 2 + window.scrollY;
    
            xPoint.set(newX);
            yPoint.set(newY);
          });
        };

        window.addEventListener("pointermove", handlePointerMove);

        return () => window.removeEventListener("pointermove", handlePointerMove);
    }, []);

    return { x, y };
}

export default function Drag() {
    const ref = useRef(null);
    const { x, y } = useFollowPointer(ref);

    return (
        <motion.div ref={ref} style={{ ...ball, x, y }}>
            <div style={leftEye}></div>
            <div style={rightEye}></div>
            <div style={mouth}></div>
        </motion.div>
    );
}