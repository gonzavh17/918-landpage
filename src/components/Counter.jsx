// Counter.jsx
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { BlackReveal } from "../animations/BlackReveal";

const Counter = ({ label, total }) => {
  const { ref: myRef, inView: visibleElement } = useInView();
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (visibleElement) {
      const interval = setInterval(() => {
        if (count < total) {
          setCount((prevCount) => prevCount + 1);
        } else {
          clearInterval(interval);
        }
      }, 5000 / total);

      return () => clearInterval(interval);
    }
  }, [visibleElement, count, total]);

  return (
    <div className="counter">
      <BlackReveal>
        <p className="counter-title">{label}</p>
      </BlackReveal>
      <p ref={myRef} className="count">
        {count}
      </p>
    </div>
  );
};

export default Counter;
