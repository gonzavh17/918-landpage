import React from "react";
import "../App.css";
import { Image } from "../Image";
import TextReveal from "../animations/ImgReveal";
import { BlackReveal } from "../animations/BlackReveal";

function History() {
  return (
    <div className="history">
      <p className="history-title">Journey begins</p>

      <div className="history-description_container">
        <div className="history-parent">
          <div className="history-div1">
            <div className="history-img_container">
              <TextReveal customDelay={0.5}>
                <img className="p-959" src={Image.porsche959} alt="" />
              </TextReveal>
              <TextReveal customDelay={1}>
                <img className="p-9593" src={Image.porsche9593} alt="" />
              </TextReveal>
            </div>
          </div>
          <div className="history-div2">
          <BlackReveal>
            <p className="history-subtitle">The beginning</p>
            </BlackReveal>
            <p className="history-description">The Porsche 959, introduced in the mid-1980s, was a trailblazer in the world of sports cars, showcasing advanced technologies and pushing the boundaries of what was possible at the time. With its innovative all-wheel-drive system, sequential twin-turbocharging, and a top speed that set records, the 959 became an icon of performance engineering. It laid the groundwork for future generations of Porsche sports cars, leaving an indelible mark on automotive history.</p>
          </div>
        </div>
      </div>

      <div className="history-description_container">
        <div className="history-parent">
          <div className="history-div1">
            <div className="history-img_container">
              <TextReveal customDelay={0.5}>
                <img className="carrera-gt1" src={Image.carreragt3} alt="" />
              </TextReveal>
              <TextReveal customDelay={1}>
                <img className="p-9593 carrera-gt2" src={Image.carreragt1} alt="" />
              </TextReveal>
            </div>
          </div>
          <div className="history-div2">
            <BlackReveal>
            <p className="history-subtitle">Mid trail</p>
            </BlackReveal>
            <p className="history-description">The Carrera GT, unveiled in the early 2000s, is a testament to the brand's racing heritage and commitment to delivering an exhilarating driving experience. Powered by a V10 engine derived from motorsport, the Carrera GT offers a symphony of power and precision. Its lightweight carbon-fiber construction and aerodynamic design contribute to remarkable agility, making it a collector's item for enthusiasts who appreciate the fusion of race-inspired technology and unparalleled craftsmanship.</p>
          </div>
        </div>
      </div>

      <div className="history-description_container">
        <div className="history-parent">
          <div className="history-div1">
            <div className="history-img_container">
              <TextReveal customDelay={0.5}>
                <img className="carrera-gt1" src={Image.porsche9181} alt="" />
              </TextReveal>
              <TextReveal customDelay={1}>
                <img className="p-9593" src={Image.porsche9182} alt="" />
              </TextReveal>
            </div>
          </div>
          <div className="history-div2">
            <BlackReveal>
            <p className="history-subtitle">Our journey</p>
            </BlackReveal>
            <p className="history-description">The Porsche 918 Spyder represents the pinnacle of hybrid hypercar technology. Launched in 2013, this cutting-edge masterpiece seamlessly blends a powerful 4.6-liter V8 engine with two electric motors, delivering a combined output of over 870 horsepower. Its carbon-fiber monocoque chassis and adaptive aerodynamics contribute to astonishing performance, making the 918 Spyder a symbol of Porsche's commitment to innovation and sustainability in the world of high-performance automobiles.</p>
          </div>
        </div>
      </div>


    </div>
  );
}

export default History;
