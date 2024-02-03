import React from "react";
import Counter from "./Counter";
import { Image } from "../Image";
import TextReveal from "../animations/ImgReveal";

function Specs() {
  const countersInfo = [
    { label: "Hp", total: 887 },
    { label: "Top Speed / Km/h", total: 351 },
    { label: "RPM", total: 8700 },
  ];

  return (
    <div className="specs" id="performance">
      <p className="specs-title">Beyond the limits</p>
      <div className="counter-container">
        {countersInfo.map((counter, index) => (
          <Counter key={index} label={counter.label} total={counter.total} />
        ))}
      </div>
      <div className="specs-parent">
        <div className="specs-div1">
          <TextReveal customDelay={.6}>  
          <img className="specs-img" src={Image.porsche918history} alt="" />
          </TextReveal>
        </div>
        <div className="specs-div2">
          <p className="specs-description">
          The Porsche 918, a marvel of automotive engineering, boasts a hybrid powertrain that harmoniously blends performance and efficiency. With a total power output of 887 horsepower and an awe-inspiring 944 lb-ft of torque, this hypercar accelerates from 0 to 60 mph in a mere 2.2 seconds. Setting record lap times at renowned circuits such as the Nürburgring Nordschleife, Suzuka, Spa-Francorchamps, and more, the 918 showcases its exceptional performance capabilities. Its cutting-edge design and advanced technology redefine the boundaries of speed and environmental responsibility. Limited in production, the 918 stands as a testament to Porsche's commitment to pushing the limits of performance while embracing a sustainable future. Experience the extraordinary blend of power and eco-consciousness with the Porsche 918.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Specs;
